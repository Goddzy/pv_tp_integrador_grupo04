import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, precio, descripcion });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <Card style={{ backgroundColor: '#12121a', padding: '2rem', width: '100%', maxWidth: '500px', border: '2px solid #00ffe770', color: '#cccccc' }}>
        <h2 style={{ color: '#00e0c0', textAlign: 'center', marginBottom: '1.5rem' }}>Crear Producto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label style={{ color: '#cccccc' }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{ backgroundColor: '#1e1e2a', borderColor: '#00ffe770', color: '#ffffff' }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label style={{ color: '#cccccc' }}>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              style={{ backgroundColor: '#1e1e2a', borderColor: '#00ffe770', color: '#ffffff' }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label style={{ color: '#cccccc' }}>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingrese una descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              style={{ backgroundColor: '#1e1e2a', borderColor: '#00ffe770', color: '#ffffff' }}
            />
          </Form.Group>

          <Button type="submit" variant="outline-info" style={{ borderColor: '#00e0c0', color: '#00e0c0' }}>
            Crear
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default CrearProducto;