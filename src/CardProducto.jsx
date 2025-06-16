import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { FavoritosContext } from "./contexts/FavoritosContext";


const CardProducto = ({ producto }) => {

  const {favoritos, toggleFavorito } = useContext(FavoritosContext);

  const esFavorito = favoritos.includes(producto.id);
  

  return (
    <Col xs={12} sm={6} md={4} className="mb-4 d-flex">
      <Card
        className="h-100 d-flex flex-column position-relative"
        style={{
          borderRadius: '10px',
          border: '1px solid #444', 
          backgroundColor: '#12121a',
          color: '#ffffff',
          boxShadow: 'none',
        }}
      >
        <Button
          variant="light"
          onClick={() => toggleFavorito(producto.id)}
          className="position-absolute top-0 end-0 m-2 rounded-circle p-2 shadow-sm"
          style={{ zIndex: 1 }}
        >
          <i
            className={`bi ${esFavorito ? 'bi-star-fill' : 'bi-star'} text-warning`}
            style={{ fontSize: '1.2rem' }}
          ></i>
        </Button>

        <Card.Img
          variant="top"
          src={producto.image}
          style={{
            height: '200px',
            objectFit: 'contain',
            backgroundColor: 'transparent', 
            padding: 0,
            margin: 0,
          }}
        />
        <Card.Body className="d-flex flex-column" style={{ padding: '1rem' }}>
          <Card.Title
            className="fs-6 text-truncate"
            title={producto.title}
            style={{ color: '#ffffff' }}
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
              color: '#ffffff', 
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
