import React from 'react';

const Cart = ({ products }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
      {products && products.map((product, index) => (
          <li key={index}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;