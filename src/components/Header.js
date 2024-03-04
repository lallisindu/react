// Header.js
import React, { useContext }  from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { CartContext } from './CartContext';
import { NavLink } from 'react-router-dom'; // Import NavLink

function Header({ onCartClick }) {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-0" style={{ borderBottom: '1px solid white' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="text-white flex-grow-1 justify-content-center">
              <NavLink to="/" className="mx-3"><h6>STORE</h6></NavLink>
              <NavLink to="/home" className="mx-3"><h6>HOME</h6></NavLink>
              
              <NavLink to="/about" className="mx-3"><h6>ABOUT</h6></NavLink>
            </Nav>
            <Nav>
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
