import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CartModal.css';

const CartModal = ({ show, onHide, cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-header">
          <span className="header-item">Items</span>
          <span className="header-price">Price</span>
          <span className="header-quantity">Quantity</span>
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '80px', maxHeight: '80px' }} />
              <div>{item.title}</div>
              <span>Price: ${item.price}</span>
              <span>Quantity: {item.quantity}</span>
              <Button variant="danger" onClick={() => removeFromCart(item)}>
                Remove
              </Button>
            </div>
          ))}
        </ul>
        <div>Total: ${calculateTotalPrice()}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
