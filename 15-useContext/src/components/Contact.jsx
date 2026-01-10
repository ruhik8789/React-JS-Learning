import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const {phone, name} = useContext(AppContext);
  return (
    <div>
      <h2>Contact</h2>
      <p>Phone: {phone}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default Contact;
