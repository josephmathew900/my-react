import React from "react";
import Gallery from "../page/Gallery";
import Home from "../page/Home";
import Login from "../page/Login";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
  },
];
