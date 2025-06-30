import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import StatsPage from './components/StatsPage';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, darkMode, setDarkMode, addTask, updateTask, deleteTask, exportTasks, importTasks } = useTasks();

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? '#111827' : '#f3f4f6',
    transition: 'background-color 0.2s ease-in-out'
  };

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onExport={exportTasks} onImport={importTasks} />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
            <Route path="/create" element={<TaskForm onSubmit={addTask} />} />
            <Route path="/edit/:id" element={<TaskForm tasks={tasks} onSubmit={updateTask} />} />
            <Route path="/stats" element={<StatsPage tasks={tasks} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;