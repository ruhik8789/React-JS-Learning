import React from "react";
import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <div>
      <Form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default ContactForm;
