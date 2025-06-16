import { Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';

const Home = ({ listaProductos }) => {
  return (
    <main style={{ backgroundColor: '#12121a', minHeight: '100vh', paddingBottom: '3rem' }}>
      <div
        style={{
          height: '70vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1500&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
          marginBottom: '2rem',
          borderBottom: '3px solid #00e0c0',
        }}
      />

      <Container className="py-5" style={{ color: '#cccccc' }}>
        <h2
          className="mb-3"
          style={{
            color: '#00e0c0',
            letterSpacing: '2px',
            fontWeight: '600',
            textShadow: '0 0 5px #00e0c0',
          }}
        >
          PRODUCTOS
        </h2>
        <hr style={{ borderColor: '#00e0c0', borderWidth: '2px', width: '80px' }} />
        <Row className="mt-4">
          {listaProductos.map((e) => (
            <CardProducto key={e.id} producto={e} />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Home;
