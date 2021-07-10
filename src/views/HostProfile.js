import React from "react";
import { CardProfile } from "../components/hostProfile";
import HostAdForm from "./HostAdForm";
export const HostProfile = () => {
  return (
    <div>
      <h3>Host Profile</h3>
      <CardProfile />
      <HostAdForm />
    </div>
  );
};
