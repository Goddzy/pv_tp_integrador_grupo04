import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#12121a',
        color: '#ccc',
        padding: '1.5rem 0',
        textAlign: 'center',
        borderTop: '2px solid #00e0c0',
        fontSize: '0.9rem',
      }}
    >
      <Container>
      <strong style={{ color: '#00e0c0' }}> © 2025. Todos los derechos reservados.</strong>
      </Container>
    </footer>
  );
};

export default Footer;