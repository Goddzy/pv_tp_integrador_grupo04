import { Container, Row } from 'react-bootstrap';
import CardProducto from './CardProducto';
import { useContext } from 'react';
import { EliminadosContext } from './contexts/EliminadosContext';
import { useNavigate } from 'react-router-dom';

const Eliminados = ({ listaProductos, setListaProductos }) => {
  const { eliminados, setEliminados } = useContext(EliminadosContext);    
    const navigate= useNavigate()

  const restaurarProducto = (id) => {
      const ok = window.confirm("¿Seguro que quieres restaurar este producto?");
      if (ok){
       const recu= eliminados.find(e=>e.id === id )
       const temp= [...listaProductos, recu]
       setListaProductos(temp)
       const eliminadosNuevo= eliminados.filter(e=>e.id !== recu.id)
       setEliminados(eliminadosNuevo);
       alert("El producto ah sido restaurado exitosamente")
        navigate("/")
      }else{
        alert("Redirigiendo al inicio")
          navigate("/");
          return;
      }
    };


  return (
    <div style={{ backgroundColor: '#12121a', minHeight: '100vh', paddingBottom: '3rem' }}>
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
          ELIMINADOS
        </h2>
        <hr style={{ borderColor: '#00e0c0', borderWidth: '2px', width: '80px' }} />

        {eliminados.length > 0 ? (
          <Row className="mt-4">
            {eliminados.map((e) => (
              <CardProducto key={e.id} producto={e} restaurarProducto={restaurarProducto} />
            ))}
          </Row>
        ) : (
          <h5 className="mt-5 text-center" style={{ color: '#FFF' }}>
            No tenés productos eliminados.
          </h5>
        )}
      </Container>
    </div>
  );
};

export default Eliminados;
