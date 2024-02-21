import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MediItems.module.css';

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
    <li className={classes['meal-item']}>
      <div className={classes.details}>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </li>
  );
};

export default MealItem;