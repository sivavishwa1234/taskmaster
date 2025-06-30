import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskForm = ({ tasks, onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: '',
    categories: []
  });

  useEffect(() => {
    if (id && tasks) {
      const taskToEdit = tasks.find(task => task.id === id);
      if (taskToEdit) {
        setFormData(taskToEdit);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/');
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    marginBottom: '1rem'
  };

  return (
    <div style={{
      maxWidth: '42rem',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {id ? 'Edit Task' : 'Create Task'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Task Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows="4"
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              style={inputStyle}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Priority</label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({...formData, priority: e.target.value})}
              style={inputStyle}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Due Date</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#e5e7eb',
              borderRadius: '0.375rem'
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              borderRadius: '0.375rem'
            }}
          >
            {id ? 'Update Task' : 'Create Task'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;