import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>Name: {item.name}</span>
            <span>Price: ${item.price}</span>
            <span>Large Quantity: {item.quantity.large}</span>
            <span>Medium Quantity: {item.quantity.medium}</span>
            <span>Small Quantity: {item.quantity.small}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
