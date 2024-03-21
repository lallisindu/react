import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  
  userEmail: '',
  setUserEmail: (email) => {} // Add userEmail property
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenExpirationTimer, setTokenExpirationTimer] = useState(null);
  const [userEmail, setUserEmail] = useState(''); // State to store user's email

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const expirationTime = localStorage.getItem('expirationTime');
      const remainingTime = expirationTime - Date.now();
      if (remainingTime > 0) {
        loginHandler(storedToken, remainingTime);
      } else {
        logoutHandler(); // Token expired
      }
    }
  }, []);

  const loginHandler = (token, expiresIn) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', Date.now() + expiresIn);
    setTokenExpirationTimer(setTimeout(logoutHandler, expiresIn));
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if (tokenExpirationTimer) {
      clearTimeout(tokenExpirationTimer);
    }
  };
  const storeCartData = async (cartData) => {
    try {
      await axios.post(`https://crudcrud.com/api/364938e6773e4f74a5b861e088649679/cart/${userEmail}`, {
        cartItems: cartData
      });
      console.log('Cart data stored successfully.');
    } catch (error) {
      console.error('Error storing cart data:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userEmail: userEmail, // Provide userEmail value
        setUserEmail: setUserEmail // Provide setUserEmail function
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
