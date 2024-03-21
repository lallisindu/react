// Header.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Header = ({ handleOpenModal }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Shoppers Stop for Tshirt</h1>
      <div>
        <button style={cartButtonStyle} onClick={handleOpenModal}>
          Cart ({cartItems.length})
        </button>
      </div>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const titleStyle = {
  margin: '0', // Remove default margin
  textAlign: 'center', // Center align the title
  flex: '1' // Allow title to take up remaining space
};

const cartButtonStyle = {
  background: '#555',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer'
};

export default Header;
