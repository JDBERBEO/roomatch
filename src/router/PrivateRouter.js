import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRouter = () => {
  const state = useSelector((state) => state.state);

  if (!isAllowed) return <Redirect to="/" />;
  return <Route props={...props}/>
}