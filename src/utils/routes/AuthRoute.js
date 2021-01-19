import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../store/AppContext";
import AnimateRoute from "./AnimateRoute";

export default function AuthRoute({ children, ...rest }) {
  const [isLoggedIn, user] = useContext(AppContext);

  if (isLoggedIn) return <AnimateRoute {...rest}>{children}</AnimateRoute>;

  return (
    <AnimateRoute>
      <Redirect to="/login" />
    </AnimateRoute>
  );
}
