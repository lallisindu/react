import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './Cart.css'; // Import the CSS file containing cart styles

function Cart() {
  const { cartItems, calculateTotalCost } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <p>{item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="cart-item-total">Total Cost: ${calculateTotalCost()}</p>
      </div>
    </div>
  );
}

export default Cart;
