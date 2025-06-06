import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
const Error404 = () => {
  const backgroundStyle = {
    backgroundColor: '#12121a',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
  };

  const contentStyle = {
    padding: '3rem',
    borderRadius: '15px',
    border: '2px solid #00e0c0',
    maxWidth: '600px',
    width: '100%',
  };

  const imageStyle = {
    width: '200px',
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 0 5px #00e0c0)',
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="404 error"
          style={imageStyle}
        />
        <h1 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#ff4d4d' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Página no encontrada</h2>
        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
          La ruta que buscás no existe o fue eliminada.
        </p>
        <Button as={Link} to="/" variant="outline-light">
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default Error404;