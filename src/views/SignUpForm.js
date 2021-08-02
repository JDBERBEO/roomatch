import React from "react";
import { NavBarCss } from "../components/NavBarCss";
import SignUpRoomie from '../components/SignUpRoomie'

export const SignUpForm = () => {
  return (
    <div>
      <NavBarCss/>
      <br></br>
      <div className="container">
        <h1>Register Roomie</h1>
        <br></br>
        <div class="divider"></div>
        <br></br>
        <SignUpRoomie />
      </div>
    </div>
  );
};
