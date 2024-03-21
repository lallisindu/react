// App.js
import React, { useState } from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { CartProvider } from './components/CartContext';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <CartProvider>
      <Header handleOpenModal={handleOpenModal} />
      <AddProductForm onAdd={handleAddProduct} />
      <ProductList products={products} />
      <CartModal showModal={showModal} handleClose={handleCloseModal} />
    </CartProvider>
  );
}

export default App;
