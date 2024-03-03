import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import CartButton from './components/CartButton';
import CartModal from './components/CartModal';
import Store from './components/Store'; // Import Store component
import { CartProvider } from './components/CartContext';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <CartProvider>
      <Header onCartClick={handleShow} /> 
      <TitleBar />{/* Pass onCartClick handler */}
      <Container>
        <div className="text-center">
          
          <Store /> {/* Include Store component */}
          <CartButton onCartClick={handleShow} /> {/* Pass onCartClick handler */}
        </div>
      </Container>
      <CartModal showModal={showModal} handleClose={handleClose} /> {/* Pass showModal and handleClose props */}
      <Footer/>
    </CartProvider>
  );
}

export default App;
