import React, { useContext }  from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import CartButton from './CartButton'; 
import { CartContext } from './CartContext';// Import CartButton

function Header({ onCartClick }) {
  const { cartItems } = useContext(CartContext); // Receive onCartClick prop
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
          {/* Use CartButton with onCartClick prop */}
          <Button variant="primary" onClick={onCartClick}>
       Cart ({cartItems.length})
      </Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </div>
  );
}

export default Header;
