import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const {phone} = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Footer;
