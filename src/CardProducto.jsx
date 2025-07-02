import { Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { FavoritosContext } from "./contexts/FavoritosContext";

const CardProducto = ({ producto, eliminarProducto }) => {
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);
  const { user } = useContext(AuthContext);
  const esFavorito = favoritos.includes(producto.id);

  return (
    <Col xs={12} sm={6} md={4} className="mb-4 d-flex">
      <Card
        className="h-100 d-flex flex-column position-relative"
        style={{
          borderRadius: "10px",
          border: "1px solid #444",
          backgroundColor: "#12121a",
          color: "#ffffff",
          boxShadow: "none",
        }}
      >
        <Button
          variant="light"
          onClick={() =>
            user
              ? toggleFavorito(producto.id)
              : alert("Debe registrarse para guardar favoritos")
          }
          className="position-absolute top-0 end-0 m-2 rounded-circle p-2 shadow-sm"
          style={{ zIndex: 1 }}
        >
          <i
            className={`bi ${
              user && esFavorito ? "bi-star-fill text-warning" : "bi-star text-secondary"
            }`}
            style={{ fontSize: "1.2rem" }}
          />
        </Button>

        <Card.Img
          variant="top"
          src={producto.image}
          style={{
            height: "200px",
            objectFit: "contain",
            backgroundColor: "transparent",
          }}
        />

        <Card.Body className="d-flex flex-column" style={{ padding: "1rem" }}>
          <Card.Title
            className="fs-6 text-truncate"
            title={producto.title}
            style={{ color: "#ffffff" }}
          >
            {producto.title}
          </Card.Title>
          <Card.Text
            className="flex-grow-1"
            style={{
              fontSize: "0.9rem",
              maxHeight: "4.5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#ffffff",
            }}
          >
            {producto.description}
          </Card.Text>

          <div className="d-flex align-items-center mt-2">
            <span className="fw-bold me-auto" style={{ color: "#ffffff" }}>
              ${producto.price}
            </span>

            { user && user.administrador ?
              <>
                <Button
                  variant="warning"
                  as={Link}
                  to={`/editar/${producto.id}`}
                  className="me-2"
                  style={{ boxShadow: "none" }}
                >
                  Editar
                </Button>

                <Button
                  variant="danger"
                  onClick={() => eliminarProducto(producto.id)}
                  className="me-2"
                  style={{ boxShadow: "none" }}
                >
                  Eliminar
                </Button>
              </>
             : null }

            <Button
              variant="primary"
              as={Link}
              to={`/producto/${producto.id}`}
              style={{ boxShadow: "none" }}
            >
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
