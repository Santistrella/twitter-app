import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/authentication.context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        auth.logged ? <Component {...props} /> : <Redirect to="/explore" />
      }
    />
  );
};

export default PrivateRoute;
