// CartModal.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Cart from './Cart'; // Import the Cart component

const CartModal = ({ showModal, handleClose }) => {
  const { cartItems } = useContext(CartContext);

  const modalStyle = {
    display: showModal ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '1000'
  };

  const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div style={modalStyle} onClick={handleClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        
        <Cart /> {/* Include the Cart component here */}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
