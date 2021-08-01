import React from "react";
import { HostProfileTab } from "../components/hostProfile";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { NavBarCss } from "../components/NavBarCss";

export const HostProfile = () => {
  function logout() {
    localStorage.removeItem("token");
  }
  return (
    <div>
      <NavBarCss/>
      <div class="container">
        <br></br>
        <div>
          <h3>Welcome</h3>
        </div>
      </div>  
 

      <br></br>
      <div class="divider"></div>
      <br></br>
      <HostProfileTab />
    </div>
  );
};
