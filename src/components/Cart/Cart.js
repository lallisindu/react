import React, { useContext } from 'react'; 
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartCntxt from '../../store/cart-context';

const Cart = (props) => {
  const cartcntx = useContext(CartCntxt);
  const totalQuantity = cartcntx.items.reduce((acc, item) => acc + Number(item.quantity), 0);
  const totalAmount = cartcntx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const cartItems = (<ul className={classes['cart-items']}>
    {cartcntx.items.map((item) => (
      <li key={item.id}>Name:{item.name}, Price:{item.price}, Quantity:{item.quantity}</li>
    ))}
  </ul>)
      

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
      <span>Total Quantity: {totalQuantity}</span>
        <span>Total Amount: {totalAmount.toFixed(2)}</span> {/* You need to replace this with actual total amount logic */}
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;