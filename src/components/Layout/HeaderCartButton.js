import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // Use totalQuantity from context
  const { totalQuantity } = cartCtx;

  return (
    <button className={classes.button} onClick={props.onClick}>
      
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;