import React from "react";

import SidebarToggleMenu from "../../atoms/SidebarToggleMenu";
import { contactMenu } from "../../../constants/contact";
import ContactForm from "./ContactForm";
import HelmetConfig from "../../../common/HelmetConfig";
import ContactFormSyntax from "./ContactFormSyntax";
import useResponsive from "../../../hooks/useResponsive";
import MediumHeading from "../../atoms/MediumHeading";
import MobileMenu from "../../../common/MobileMenu";

function Contact() {
  const { isTabletOrMobile } = useResponsive();
  return (
    <div className="contact-me-container">
      <HelmetConfig title="Contact" />
      {isTabletOrMobile && <MobileMenu data={contactMenu} />}
      {isTabletOrMobile && <MediumHeading text="Contact" color="white" />}
      {!isTabletOrMobile && <SidebarToggleMenu data={contactMenu} />}
      <ContactForm />
      {!isTabletOrMobile && <ContactFormSyntax />}
    </div>
  );
}

export default Contact;
