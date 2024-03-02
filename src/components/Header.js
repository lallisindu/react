import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styles from './Title.module.css'; // Import CSS module

const Header = ({showCart}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-0" style={{ borderBottom: '1px solid white' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="text-white flex-grow-1 justify-content-center">
              <Nav.Link href="#home" className="mx-3"><h6>HOME</h6></Nav.Link>
              <Nav.Link href="#store" className="mx-3"><h6>STORE</h6></Nav.Link>
              <Nav.Link href="#about" className="mx-3"><h6>ABOUT</h6></Nav.Link>
              {/* Add more navigation links as needed */}
            </Nav>
            <Nav>
              <Button  onClick={showCart}  variant="outline-light">Cart</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </div>
  );
}

export default Header;