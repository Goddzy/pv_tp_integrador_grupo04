import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ listaProductos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = listaProductos.find(e => e.id == id);

  if (!producto) {
    return (
      <Container className="py-5 text-center">
        <h4>Producto no encontrado</h4>
        <Button variant="primary" onClick={() => navigate(-1)}>Volver</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card
        className="mx-auto shadow-sm"
        style={{ maxWidth: '900px', borderRadius: '15px' }}
      >
        <Row className="g-0">
          <Col md={5} className="d-flex align-items-center p-3">
            <Card.Img
              src={producto.image}
              alt={producto.title}
              style={{ objectFit: 'contain', maxHeight: '350px', width: '100%', borderRadius: '12px' }}
            />
          </Col>
          <Col md={7}>
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title style={{ fontWeight: '700', fontSize: '1.8rem' }}>
                {producto.title}
              </Card.Title>
              <Card.Text className="text-muted" style={{ flexGrow: 1, fontSize: '1rem', lineHeight: '1.4' }}>
                {producto.description}
              </Card.Text>

              <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                <p><strong>Categoría:</strong> {producto.category}</p>

                <p><strong>Stock:</strong> {producto.rating.count ?? 'N/A'}</p> 
                <p><strong>Precio:</strong> <span style={{ color: '#198754', fontWeight: '700' }}>${producto.price}</span></p>
              </div>

              <Button
                onClick={() => navigate(-1)}
                style={{ alignSelf: 'flex-start', borderRadius: '30px', padding: '0.5rem 2rem' }}
              >
                 Volver
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;
