import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const CrearProducto = ({setListaProductos, listaProductos,idProducto, setIdProducto}) => {
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto={
      id: idProducto,
      image: imagen,
      price: precio,
      description: descripcion,
      category: categoria,
      rating:{
        rates: 0,
        count: stock,
      }
    }
    setListaProductos([...listaProductos, nuevoProducto])
    setIdProducto(idProducto+1)
  };

  const inputStyle = {
    backgroundColor: '#1e1e2a',
    borderColor: '#00ffe770',
    color: '#ffffff'
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <Card style={{
        backgroundColor: '#12121a',
        padding: '2rem',
        width: '100%',
        maxWidth: '600px',
        border: '2px solid #00ffe770',
        color: '#cccccc'
      }}>
        <h2 style={{ color: '#00e0c0', textAlign: 'center', marginBottom: '1.5rem' }}>Crear Producto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label style={{ color: '#cccccc' }}>ID</Form.Label>
            <Form.Control
              type="text"
              disabled
              value={idProducto}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label style={{ color: '#cccccc' }}>Imagen representativa (URL)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la URL de la imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label style={{ color: '#cccccc' }}>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label style={{ color: '#cccccc' }}>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              style={inputStyle}
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
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formCategoria">
            <Form.Label style={{ color: '#cccccc' }}>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>
          
          <Form.Group className="mb-4" controlId="formStock">
            <Form.Label style={{ color: '#cccccc' }}>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={inputStyle}
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