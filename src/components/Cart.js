import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../store/auth-context';
import { CartContext } from './CartContext';
import CartItem from './CartItem'; // Import the CartItem component


const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext); // Destructure setCartItems from CartContext
  const authCtx = useContext(AuthContext);
  const { userEmail } = authCtx;

  const sanitizeEmail = (email) => {
    return email.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const sanitizedEmail = sanitizeEmail(userEmail);
        const response = await axios.get(`https://crudcrud.com/api/ff6ecbc9036d495c811042976c785ce7/cart${sanitizedEmail}`);
        setCartItems(response.data); // Update cartItems using setCartItems function
        console.log(response.data, 'get data'); // Log cart data
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    if (userEmail) {
      fetchCartData();
    }
  }, [setCartItems]); // Trigger fetchCartData when userEmail or setCartItems changes

  useEffect(() => {
    // Log the updated cartItems state for debugging purposes
    console.log('Updated cartItems:', cartItems);
  }, [cartItems]); // Trigger the effect when cartItems changes

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <div className="cart-items">
  {cartItems.map((item) => (
    <CartItem key={item._id} item={item} />
  ))}
</div>
    </div>
  );
};

export default Cart;
