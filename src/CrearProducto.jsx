import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CrearProducto = ({ setListaProductos, listaProductos, idProducto, setIdProducto }) => {
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      id: idProducto,
      image: imagen,
      price: precio,
      description: descripcion,
      category: categoria,
      rating: {
        rates: 0,
        count: stock,
      },
    };
    setListaProductos([...listaProductos, nuevoProducto]);
    setIdProducto(idProducto + 1);
  };

  const backgroundStyle = {
    backgroundColor: '#12121a',
    minHeight: '100vh',
    color: '#cccccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  const contentStyle = {
    padding: '2.5rem 3rem',
    borderRadius: '15px',
    border: '2px solid #00e0c0',
    maxWidth: '600px',
    width: '100%',
  };

  const inputStyle = {
    backgroundColor: '#1e1e2a',
    borderColor: '#00ffe770',
    color: '#ffffff',
  };

  return (
    <div style={backgroundStyle}>
      <Container style={contentStyle}>
        <h2 style={{ color: '#00e0c0', textAlign: 'center', marginBottom: '1.5rem' }}>
          Crear Producto
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" disabled value={idProducto} style={inputStyle} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen representativa (URL)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la URL de la imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingrese una descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la categoría"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="outline-info"
            style={{ borderColor: '#00e0c0', color: '#00e0c0', width: '100%' }}
          >
            Crear
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CrearProducto;
