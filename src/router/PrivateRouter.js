import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouter = (props) => {
  const [isAllowed, setstate] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("token");
    setstate(token);
  }, []);
  console.log("isAllowed", isAllowed);
  if (!isAllowed) return <Redirect to="/" />;
  return <Route props={props} />;
};
