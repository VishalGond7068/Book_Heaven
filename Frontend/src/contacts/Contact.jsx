import React from "react";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contact";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Contacts />
      </div>
    </div>
  );
}

export default Contact;
