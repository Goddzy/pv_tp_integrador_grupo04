import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

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
            <Nav className="mx-auto">
          </Nav>
           <Nav className="ms-auto">
            {user ? (
              <span
                className="navbar-text"
                style={{
                  color: '#cccccc',
                  fontWeight: 500,
                  fontSize: '1rem',
                  marginRight: '0.5rem'
                }}
              >
                Bienvenido, {user.nombre}
              </span>
            ) : null 
            }
          </Nav>
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Inicio
            </Nav.Link>

            {user ? null : 
            <Nav.Link
              as={Link}
              to="/iniciarSesion"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Iniciar Sesión
            </Nav.Link>
            }
            
            {user ? null :
            <Nav.Link
              as={Link}
              to="/crearUsuario"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Registrarse
            </Nav.Link>
            }
            
            {user ?
            <Nav.Link
              as={Link}
              to="/favoritos"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Favoritos
            </Nav.Link>
            :
            null
            }
             {user && user.administrador ?
            <Nav.Link
              as={Link}
              to="/eliminados"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Productos Eliminados
            </Nav.Link>
            :
            null
            }

            {user && user.administrador ? 
            
              <Nav.Link
              as={Link}
              to="/crearProducto"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Crear Producto
            </Nav.Link>
            :
             null
             }
            
            <Nav.Link
              as={Link}
              to="/aboutUs"
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Contacto
            </Nav.Link>

             {user ?
            <Nav.Link
              onClick={() => {
                logout();
                alert("Sesión cerrada correctamente.");
                navigate('/iniciarSesion');
              }}
              style={{ color: '#cccccc', fontWeight: 500 }}
            >
              Cerrar Sesión
            </Nav.Link>
            :
            null
            }
            


          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;