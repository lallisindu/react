import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

function CartButton({ onCartClick }) {
  const { cartItems } = useContext(CartContext);
  // Receive onCartClick prop
  return (
    <div>
      <Button variant="primary" onClick={onCartClick}>
       Cart 
      </Button>
    </div>
  );
}

export default CartButton;
