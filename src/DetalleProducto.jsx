import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import imagen from '../images/ejemplo1.webp';

const ProductDetail = () => {
  const { id } = useParams();

  
  const product = {
    id: parseInt(id),
    image: imagen,
    title: `Producto ${id}`,
    description:
      'Esta es una descripción ampliada del producto. Aquí se detallan características, beneficios y cualquier información relevante.',
    category: 'Categoría A',
    stock: 20,
    price: '$150',
  };

  return (
    <Container className="py-5">
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>Descripción: </strong> {product.description} <br />
            <strong>Categoría: </strong> {product.category} <br />
            <strong>Stock: </strong> {product.stock} <br />
            <strong>Precio: </strong> {product.price} <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;
