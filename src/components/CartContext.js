import React, { useState, createContext } from 'react';



export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to calculate the total cost of all items in the cart
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (existingItem) => existingItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const updateItemQuantity = (index, newQuantity) => {
  
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart, updateItemQuantity, calculateTotalCost,  }}>
      {children}
    </CartContext.Provider>
  );
};
