import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (e) => {
         e.preventDefault();
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: 1,
    });
  };

  return (
    <form className={classes.form}>
    <li>
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}></div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
    </form>
  );
};

export default MealItem;