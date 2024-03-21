// App.js
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import Store from './components/Store';
import { CartProvider } from './components/CartContext';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import { AuthContextProvider, AuthContext } from './store/auth-context'; // Import AuthContextProvider and AuthContext
import Cart from './components/Cart';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Header onCartClick={handleShow} />
          <TitleBar />
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products" element={<ProductPage />} exact />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <CartButton onCartClick={handleShow} />
        <CartModal showModal={showModal} handleClose={handleClose} />
        <Footer />
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
