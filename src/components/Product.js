import React from 'react';

const Product = ({ id, name, price, onDelete }) => {
  return (
    <div>
      
      <p>${price}-{name}
      <button onClick={() => onDelete(id)}> Delete Product</button>
      </p></div>
  );
};

export default Product;