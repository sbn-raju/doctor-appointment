import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, isAdmin, children }) => {
  if (!isAuthenticated) {
    <Navigate to={"/admin/login"} />;
  }

  if (!isAuthenticated && !isAdmin) {
    <Navigate to={"/admin/login"} />;
  }
  
  return children ?children: <Outlet />
};

export default PrivateRoute;
