import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Editar = ({ listaProductos, setListaProductos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = listaProductos.find(p => p.id === parseInt(id));

  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (producto) {
      setImagen(producto.image);
      setNombre(producto.title);
      setPrecio(producto.price);
      setDescripcion(producto.description);
      setCategoria(producto.category);
      setStock(producto.rating.count);
    }
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productoEditado = {
      id: parseInt(id),
      image: imagen,
      title: nombre,
      price: precio,
      description: descripcion,
      category: categoria,
      rating: {
        count: stock,
        rate: 0,
      },
    };
    const nuevoArray = listaProductos.map(e => (e.id === parseInt(id) ? productoEditado : e));
    setListaProductos(nuevoArray);
    navigate('/');
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
          Editar Producto
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              disabled
              value={id}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen representativa (URL)</Form.Label>
            <Form.Control
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
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
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
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
            Guardar Cambios
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Editar;
