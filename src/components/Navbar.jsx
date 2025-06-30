import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode, onExport, onImport }) => {
  const navStyle = {
    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '1rem 0'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonStyle = {
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            backgroundColor: '#4f46e5',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>T</span>
          </div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: darkMode ? 'white' : '#111827'
          }}>TaskMaster</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={buttonStyle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <Link
            to="/create"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: '#4f46e5',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <span style={{ marginLeft: '0.5rem' }}>New Task</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;