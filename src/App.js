// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import Store from './components/Store';
import { CartProvider } from './components/CartContext';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs'; // Import ContactUs component

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <CartProvider>
      <Router>
        <Header onCartClick={handleShow} />
        <TitleBar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Route for ContactUs */}
        </Routes>
      </Router>
      <CartButton onCartClick={handleShow} />
      <CartModal showModal={showModal} handleClose={handleClose} />
      <Footer />
    </CartProvider>
  );
}

export default App;
