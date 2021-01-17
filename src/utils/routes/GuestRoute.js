import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Loading from "../../components/Loading";
import AppContext from "../../store/AppContext";

export default function GuestRoute(props) {
  const [isLoggedIn, user] = useContext(AppContext);
  console.log(isLoggedIn);

  //if (isLoggedIn === null) return <Loading />;

  if (!isLoggedIn) return <Route {...props} />;

  return <Redirect to="/" />;
}
