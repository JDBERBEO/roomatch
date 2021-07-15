import React from "react";
import { HostProfileTab } from "../components/hostProfile";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const HostProfile = () => {
  function logout() {
    localStorage.removeItem("Token");
  }
  return (
    <div>
      <h3>Host Profile</h3>
      <Link to="/">
        <Button onClick={logout}>logout</Button>
      </Link>
      <HostProfileTab />
    </div>
  );
};
