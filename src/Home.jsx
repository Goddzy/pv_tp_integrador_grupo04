import { Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';
import { useContext } from 'react';
import { FavoritosContext } from './contexts/FavoritosContext';
import { useNavigate } from 'react-router-dom';
const Home = ({ listaProductos, setListaProductos }) => {
  const { toggleFavorito, favoritos  } = useContext(FavoritosContext);
  const navigate=useNavigate();

  const eliminarProducto = (id) => {
      const ok = window.confirm("¿Seguro que quieres eliminar este producto?");
      if (ok){
        if(favoritos.includes(id))
          toggleFavorito(id)
        const prodMod=listaProductos.filter(e => e.id !== id)
        setListaProductos(prodMod);
      }else 
          navigate("/");
          return;
    };

  return (
    <div style={{ backgroundColor: '#12121a', minHeight: '100vh', paddingBottom: '3rem' }}>
      <div
        style={{
          height: '70vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80)',
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
            <CardProducto key={e.id} producto={e} eliminarProducto={eliminarProducto} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
