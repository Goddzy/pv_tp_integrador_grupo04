import { Container, Row, Col, Card, Form } from 'react-bootstrap';

import sinFoto from './images/sinFoto.png'

const Contacto = () => {
  return (
    <div
      className="py-5 px-3"
      style={{
        backgroundColor: '#12121a',
        color: '#ccc',
        minHeight: '100vh',
      }}
    >
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#00e0c0' }}>
          Sobre Nosotros
        </h2>
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-light">
              <img
                src={sinFoto}
                alt="Avatar"
                className="avatar-img mb-3 rounded-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#00e0c0' }}>Renato Trevisiol Montiel</Card.Title>
                <Card.Text>
                  DNI: 46.526.636 <br></br>
                  LU: APU006061 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-light">
              <img
                src={sinFoto}
                alt="Avatar"
                className="avatar-img mb-3 rounded-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#00e0c0' }}>Lucas Sebastian Orrabaliz</Card.Title>
                <Card.Text>
                  DNI: 45.560.821 <br></br>
                  LU: APU006039
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-3 bg-dark text-light">
              <img
                src={sinFoto}
                alt="Avatar"
                className="avatar-img mb-3 rounded-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: '#00e0c0' }}>Cari Enrique Gustavo</Card.Title>
                <Card.Text>
                  DNI: 36.350.826 <br></br>
                  LU: APU00---- 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
