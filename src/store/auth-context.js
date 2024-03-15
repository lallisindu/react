// auth-context.js
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenExpirationTimer, setTokenExpirationTimer] = useState(null);

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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
