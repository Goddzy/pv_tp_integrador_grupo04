import imagen from '../images/ejemplo1.webp';
import { Container, Carousel, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardProducto from './CardProducto';

const Home = ({listaProductos}) => {
  return (
    <>
      <Carousel indicators={false} controls={true} fade interval={5000}>
        <Carousel.Item>
          <div
            style={{
              height: '70vh',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1500&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: '70vh',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1500&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: '70vh',
              backgroundImage:
                'url(https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1500&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
            }}
          />
        </Carousel.Item>
      </Carousel>
      <Container className="py-5">
        <h2 className="text-dark mb-3">PRODUCTOS</h2>
        <hr />
        <hr style={{ borderColor: '#00e0c0', borderWidth: '2px', width: '80px' }} />
        <Row className="mt-4">
          {listaProductos.map(e => { return <CardProducto key={e.id} producto={e}/>} )}
        </Row>
      </Container>
    </>
  );
};

export default Home;

