
import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Mediciens/Mediciens'
import Header from './components/Layout/Header';
import InputForm from './components/Mediciens/AddItem';
import Med from './components/Mediciens/Med';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} cartItems={cartItems} />
      <main>
        <Med />
        <Meals/>
      </main>
    </div>
  );
}

export default App;