import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  return useAuth(token) === true ? children : <Navigate to="/login"> </Navigate>;
}

export default PrivateRoute;
