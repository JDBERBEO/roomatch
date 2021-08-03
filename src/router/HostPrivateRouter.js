import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const HostPrivateRouter = (props) => {
  const [isAllowed, setstate] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("tokenHost");
    setstate(token);
  }, []);

  if (!isAllowed) return <Redirect to="/" />;
  return <Route {...props} />;
};
