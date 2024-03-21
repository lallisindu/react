import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductList = ({ products }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>
              Quantities - Large: {product.quantity.large}, 
              Medium: {product.quantity.medium}, 
              Small: {product.quantity.small}
            </p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
