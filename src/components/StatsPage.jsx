const StatsPage = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem'
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Task Statistics</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        <div style={cardStyle}>
          <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Total Tasks</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{totalTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Completed</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{completedTasks}</p>
          <p style={{ color: '#6b7280' }}>
            {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}% completion rate
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Pending</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{pendingTasks}</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: '#6b7280', marginBottom: '0.5rem' }}>In Progress</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{inProgressTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;