import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.documentElement.style.backgroundColor = darkMode ? '#111827' : '#f3f4f6';
    localStorage.setItem('darkMode', darkMode);
  }, [tasks, darkMode]);

  const addTask = (task) => {
    setTasks([...tasks, { 
      ...task, 
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...updatedTask, id, updatedAt: new Date().toISOString() } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const exportTasks = () => {
    const data = JSON.stringify(tasks, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importTasks = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedTasks = JSON.parse(e.target.result);
        if (Array.isArray(importedTasks)) {
          // Validate imported tasks
          const validTasks = importedTasks.filter(task => 
            task.id && task.title && task.description
          );
          if (validTasks.length > 0) {
            setTasks(validTasks);
          } else {
            alert('No valid tasks found in the file!');
          }
        }
      } catch (error) {
        alert('Invalid file format! Please upload a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return {
    tasks,
    darkMode,
    setDarkMode,
    addTask,
    updateTask,
    deleteTask,
    exportTasks,
    importTasks
  };
};