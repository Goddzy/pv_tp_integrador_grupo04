import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardProducto = ({ producto }) => {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <Col xs={12} sm={6} md={4} className="mb-4 d-flex">
      <Card
        className="h-100 d-flex flex-column position-relative"
        style={{
          borderRadius: '10px',
          border: '1px solid #444', // borde sutil y menos llamativo
          backgroundColor: '#12121a',
          color: '#ffffff',
          boxShadow: 'none', // sin sombra fuerte
        }}
      >
        <Button
          variant="light"
          onClick={toggleFavorito}
          className="position-absolute top-0 end-0 m-2 rounded-circle p-2 shadow-sm"
          style={{ zIndex: 1 }}
        >
          <i
            className={`bi ${favorito ? 'bi-star-fill' : 'bi-star'} text-warning`}
            style={{ fontSize: '1.2rem' }}
          ></i>
        </Button>

        <Card.Img
          variant="top"
          src={producto.image}
          style={{
            height: '200px',
            objectFit: 'contain',
            backgroundColor: 'transparent', // sin fondo blanco
            padding: 0,
            margin: 0,
          }}
        />
        <Card.Body className="d-flex flex-column" style={{ padding: '1rem' }}>
          <Card.Title
            className="fs-6 text-truncate"
            title={producto.title}
            style={{ color: '#ffffff' }} // texto en blanco
          >
            {producto.title}
          </Card.Title>
          <Card.Text
            className="flex-grow-1"
            style={{
              fontSize: '0.9rem',
              maxHeight: '4.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: '#ffffff', // texto en blanco
            }}
          >
            {producto.description}
          </Card.Text>
          <div className="d-flex align-items-center mt-2">
            <span className="fw-bold me-auto" style={{ color: '#ffffff' }}>
              ${producto.price}
            </span>
            <Button
              variant="warning"
              as={Link}
              to={`/editar/${producto.id}`}
              className="me-2"
              style={{ boxShadow: 'none' }}
            >
              Editar
            </Button>
            <Button
              variant="primary"
              as={Link}
              to={`/producto/${producto.id}`}
              style={{ boxShadow: 'none' }}
            >
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
