import React from "react";

import SidebarToggleMenu from "../atoms/SidebarToggleMenu";
import { contact } from "../../constants/contact";
import ContactForm from "../atoms/ContactForm";

function Contact() {
  return (
    <div className="contact-me-container">
      <SidebarToggleMenu data={contact} />
      <ContactForm />
    </div>
  );
}

export default Contact;
