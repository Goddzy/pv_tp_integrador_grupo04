import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="shadow-sm"
      style={{
        backgroundColor: '#12121a',
        paddingTop: '1.2rem',
        paddingBottom: '1.2rem',
        borderBottom: '2px solid #00ffe770'
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '1.6rem',
            color: '#00e0c0'
          }}
        >
          Trabajo Final
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/iniciarSesion"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/crearUsuario"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Registrarse
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favoritos"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Favoritos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/crearProducto"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Crear Producto
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/aboutUs"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;