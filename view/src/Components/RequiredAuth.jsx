import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { user } = useSelector((state) => state.authReducer);
  console.log({ user });
  const location = useLocation();
  const from = {
    pathname: location?.pathname,
  };

  if (user?.userType === "admin") return children;
  return <Navigate to={"/login"} state={from} replace />;
};

export default RequiredAuth;
