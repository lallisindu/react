import React from 'react';
import classes from './CartItems.module.css';


const CartItem = (props) => {
  const { name, price, quantity, onReduce, onAdd } = props;

  return (
    
    <li className={classes['cart-item']}>
      <div >
      <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price.toFixed(2)}</span>
          <span className={classes.quantity}>x {quantity}</span>
          
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onReduce}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
    
  );
};

export default CartItem;