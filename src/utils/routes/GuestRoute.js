import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../store/AppContext";
import AnimateRoute from "./AnimateRoute";

export default function GuestRoute({ children, ...rest }) {
  const [isLoggedIn, user] = useContext(AppContext);

  if (!isLoggedIn) return <AnimateRoute {...rest}>{children}</AnimateRoute>;

  return <Redirect to="/" />;
}
