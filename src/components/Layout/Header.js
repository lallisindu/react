import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    const totalItems = props.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Fragment>
    <header className={classes.header}>
    <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} cartItemCount={totalItems} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
    
  );
};

export default Header;