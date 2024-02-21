import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
    const totalItems = props.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Fragment>
    <header className={classes.header}>
    <h1>ReactMedicins</h1>
      <HeaderCartButton onClick={props.onShowCart} cartItemCount={totalItems} />
    </header>
    
    </Fragment>
    
  );
};

export default Header;