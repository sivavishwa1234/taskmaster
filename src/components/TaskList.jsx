import { Link } from 'react-router-dom';

const TaskList = ({ tasks, deleteTask }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem'
  };

  const thStyle = {
    textAlign: 'left',
    padding: '0.75rem',
    backgroundColor: '#f3f4f6',
    fontWeight: '500'
  };

  const tdStyle = {
    padding: '0.75rem',
    borderBottom: '1px solid #e5e7eb'
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Task Dashboard</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Priority</th>
            <th style={thStyle}>Due Date</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td style={tdStyle}>{task.title}</td>
              <td style={tdStyle}>{task.description}</td>
              <td style={tdStyle}>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: 
                    task.status === 'completed' ? '#dcfce7' : 
                    task.status === 'in-progress' ? '#fef3c7' : '#f3f4f6',
                  color: 
                    task.status === 'completed' ? '#166534' : 
                    task.status === 'in-progress' ? '#92400e' : '#374151'
                }}>
                  {task.status}
                </span>
              </td>
              <td style={tdStyle}>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: 
                    task.priority === 'high' ? '#fee2e2' : 
                    task.priority === 'medium' ? '#fef3c7' : '#dcfce7',
                  color: 
                    task.priority === 'high' ? '#991b1b' : 
                    task.priority === 'medium' ? '#92400e' : '#166534'
                }}>
                  {task.priority}
                </span>
              </td>
              <td style={tdStyle}>{task.dueDate || '-'}</td>
              <td style={tdStyle}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link to={`/edit/${task.id}`} style={{ color: '#4f46e5' }}>Edit</Link>
                  <button 
                    onClick={() => deleteTask(task.id)} 
                    style={{ color: '#ef4444' }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;