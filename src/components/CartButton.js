import React from 'react';

const CartButton = ({ onClick }) => {
  return (
    <button onClick={onClick}  style={{ backgroundColor: 'gray', color: 'blue', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      See the Cart
    </button>
  );
}

export default CartButton;
