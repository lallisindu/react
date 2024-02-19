import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

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
        <Meals />
      </main>
    </div>
  );
}

export default App;