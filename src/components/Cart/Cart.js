import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemReduceHandler = (id) => {
    cartCtx.reduceItemQuantity(id); // Call the reduceItemQuantity handler from CartContext
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
      onReduce={cartItemReduceHandler.bind(null, item.id)} // Bind item id to the onReduce handler
    />
  ));

  const totalAmount = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalAmount = totalAmount.toFixed(2);

  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <div className={classes['cart-items-container']}>
        <ul className={classes['cart-items']}>
          {cartItems}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
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