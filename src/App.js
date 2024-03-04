// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Header from './components/Header';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import Store from './components/Store';
import { CartProvider } from './components/CartContext';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <CartProvider>
      <Router>
        <Header onCartClick={handleShow} />
        <TitleBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
      <CartButton onCartClick={handleShow} />
      <CartModal showModal={showModal} handleClose={handleClose} />
      <Footer />
    </CartProvider>
  );
}

export default App;
