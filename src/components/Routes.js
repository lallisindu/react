import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import Products from './Products';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <PrivateRoute path="/products" element={<Products />} />
    </ReactRoutes>
  );
};

export default Routes;