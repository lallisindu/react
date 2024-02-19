import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  // Add function to calculate total quantity
  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item of items) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  };

  const addItemToCartHandler = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    // Remove the item from the cart based on its ID
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const reduceItemQuantityHandler = (id) => {
    // Reduce the quantity of the item in the cart
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    if (updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex].quantity -= 1;
      setItems(updatedItems);
    } else {
      // If the quantity is already 1, remove the item from the cart
      removeItemFromCartHandler(id);
    }
  };

  const cartContext = {
    items: items,
    totalQuantity: calculateTotalQuantity(), // Calculate total quantity
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    reduceItemQuantity: reduceItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;