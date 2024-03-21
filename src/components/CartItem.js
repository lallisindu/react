// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Quantities - Large: {item.quantity.large}, Medium: {item.quantity.medium}, Small: {item.quantity.small}</p>
    </div>
  );
};

export default CartItem;
