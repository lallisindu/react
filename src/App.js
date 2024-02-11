
import './App.css';

import React, { useState, useEffect } from 'react';
import Product from './components/Product';
import AddProduct from './components/AddProduct';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalCost = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h1>Product List</h1>
      <AddProduct onAdd={handleAddProduct} />
      <h1>Products</h1>
      {products.map((product) => (
        
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          onDelete={handleDeleteProduct}
        />
      ))}
      <p>Total Value Worth of Product: Rs{totalCost}</p>
    </div>
  );
};

export default App;
