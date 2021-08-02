import React from "react";
import Hostform from "../components/BehostForm";
import { NavBarCss } from "../components/NavBarCss";

export const BeHost = () => {
  return (
    <div>
      <NavBarCss/>
      <br></br>
      <div className="container">
        <h1>Host Form Register</h1>
        <br></br>
        <div class="divider"></div>
        <br></br>
        <Hostform />
      </div>
     </div>
  );
};

export default BeHost;
