import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CrearProducto = ({ setListaProductos, listaProductos, idProducto, setIdProducto }) => {
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState("");

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
    backgroundColor: "#12121a",
    minHeight: "100vh",
    color: "#cccccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  };

  const contentStyle = {
    padding: "2.5rem 3rem",
    borderRadius: "15px",
    border: "2px solid #00e0c0",
    maxWidth: "700px",
    width: "100%",
  };

  const inputStyle = {
    backgroundColor: "#1e1e2a",
    borderColor: "#00ffe770",
    color: "#ffffff",
  };

  return (
    <div style={backgroundStyle}>
      <Container style={contentStyle}>
        <h2 style={{ color: "#00e0c0", textAlign: "center", marginBottom: "1.5rem" }}>
          Crear Producto
        </h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen representativa (URL)</Form.Label>
                <Form.Control type="text" placeholder="URL" value={imagen} onChange={(e) => setImagen(e.target.value)} style={inputStyle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} style={inputStyle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} style={inputStyle} />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formCategoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} style={inputStyle} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} style={inputStyle} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col md={6} className="d-flex justify-content-center">
              <Button type="submit" variant="outline-info" style={{ borderColor: "#00e0c0", color: "#00e0c0", width: "100%" }}>
                Crear
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CrearProducto;

