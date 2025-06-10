import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contacto = () => {

  const contacts = [
    { id: 1, name: 'Juan Pérez', phone: '1234567890', email: 'juan.perez@example.com' },
    { id: 2, name: 'María García', phone: '0987654321', email: 'maria.garcia@example.com' },
    { id: 3, name: 'Luis Martínez', phone: '1122334455', email: 'luis.martinez@example.com' },
    { id: 4, name: 'Ana Gómez', phone: '5566778899', email: 'ana.gomez@example.com' }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4">Contacto</h1>
      <Row>
        {contacts.map((contact) => (
          <Col key={contact.id} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                  <div>
                    <strong>Teléfono:</strong> {contact.phone}
                  </div>
                  <div>
                    <strong>Email:</strong> {contact.email}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contacto;
