import React, { useContext } from 'react';
import { Modal, Button, Image, Form } from 'react-bootstrap';
import { CartContext } from './CartContext';
import './CartStyles.css'; // Import custom CSS for styling

function CartModal({ showModal, handleClose }) {
  const { cartItems, removeItemFromCart, updateItemQuantity, calculateTotalCost } = useContext(CartContext);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    updateItemQuantity(index, newQuantity);
  };

  const handleBackdropClick = (event) => {
    // Prevent the modal from closing when the backdrop is clicked
    event.stopPropagation();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <div onClick={handleBackdropClick}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-header">
            <div className="header-item">Title</div>
            <div className="header-price">Price</div>
            <div className="header-quantity">Quantity</div>
          </div>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <Image src={item.imageUrl} alt={item.title} fluid className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="header-item">{item.title}</div>
                  <div className="header-price">${item.price}</div>
                  <div className="header-quantity">
                    <Form.Group controlId={`quantity-${index}`}>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) => handleQuantityChange(index, event)}
                        style={{ color: 'red' }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <Button variant="danger" onClick={() => removeItemFromCart(index)}>Remove</Button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total Cost: ${calculateTotalCost()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CartModal;
