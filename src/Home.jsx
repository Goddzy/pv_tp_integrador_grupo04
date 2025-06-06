import imagen from '../images/ejemplo1.webp'
import { Container, Carousel, Row, Col, Card, Button } from 'react-bootstrap';
const Home = () => {
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
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
            </Card.Body>
           </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
            </Card.Body>
           </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imagen} />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
            </Card.Body>
           </Card>
        </Col>
      </Row>
    </Container>

    
    </>
  );
};

export default Home;