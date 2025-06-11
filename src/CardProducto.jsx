import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4 d-flex">
      <Card className="h-100 d-flex flex-column">
        <Card.Img variant="top" src={producto.image} style={{ height: '200px', objectFit: 'contain' }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6 text-truncate" title={producto.title}>
            {producto.title}
          </Card.Title>
          <Card.Text
            className="flex-grow-1 text-muted"
            style={{
              fontSize: '0.9rem',
              maxHeight: '4.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {producto.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="fw-bold">${producto.price}</span>
            <Button variant="primary" as={Link} to={`/producto/${producto.id}`}>
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
