import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Editar = ({ listaProductos , setListaProductos}) => {
  const { id } = useParams();
  const navigate= useNavigate()
  const producto = listaProductos.find(p => p.id === parseInt(id));

  const [imagen, setImagen] = useState(producto.image);
  const [nombre, setNombre] = useState(producto.title);
  const [precio, setPrecio] = useState(producto.price);
  const [descripcion, setDescripcion] = useState(producto.description);
  const [categoria, setCategoria] = useState(producto.category);
  const [stock, setStock] = useState(producto.rating.count);

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
    const productoEditado={
        id: parseInt(id),
        image: imagen,
        title: nombre,
        price: precio,
        description: descripcion,
        category: categoria,
        rating:{
            count: stock,
            rate: 0, 
        }
    }
    let nuevoarray=listaProductos.map(e => e.id==parseInt(id) ? productoEditado : e)
    setListaProductos(nuevoarray)
    navigate('/')
  };

  const inputStyle = {
    backgroundColor: '#1c1c28',
    border: '1px solid #333',
    color: '#cccccc'
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
        <h2 style={{ color: '#00e0c0', textAlign: 'center', marginBottom: '1.5rem' }}>Editar Producto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label style={{ color: '#cccccc' }}>ID</Form.Label>
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

          <Button type="submit" variant="outline-info" style={{ borderColor: '#00e0c0', color: '#00e0c0' }}>
            Guardar Cambios
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Editar;
