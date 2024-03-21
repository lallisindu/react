import React, { useState, useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from './CartContext';
import Review from './Review';
import { AuthContext } from '../store/auth-context';

const ProductDetails = () => {
  const { addItemToCart } = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const { userEmail } = authCtx;
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const params = useParams();
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get('imageUrl');

  // Function to sanitize the email address
  const sanitizeEmail = (email) => {
    return email.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters
  };

  useEffect(() => {
    // Fetch cart items when the component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const sanitizedEmail = sanitizeEmail(userEmail);
      const response = await axios.get(`https://crudcrud.com/api/ff6ecbc9036d495c811042976c785ce7/cart${sanitizedEmail}`);
      console.log('Cart Items:', response.data);
      setCartItems(response.data); // Set the cart items in state
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      addItemToCart(product);

      const sanitizedEmail = sanitizeEmail(userEmail);
      const response = await axios.post(`https://crudcrud.com/api/ff6ecbc9036d495c811042976c785ce7/cart${sanitizedEmail}`, {
        product: product
      });
      console.log('Item added to cart:', response.data);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <section>
      <h1>Product Details</h1>
      {imageUrl && <img src={imageUrl} alt="Product" />}
      <p>Product ID: {params.productId}</p>
      <Button onClick={() => handleAddToCart({ title: 'Product', price: 100, imageUrl })}>
        Add to Cart
      </Button>
      <Review reviews={reviews} setReviews={setReviews} />
      {/* Display cart items */}
      
    </section>
  );
};

export default ProductDetails;
