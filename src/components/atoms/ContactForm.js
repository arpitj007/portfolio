import React from "react";
import { useStore } from "react-redux";

import withMiddleDetailsSection from "../../../hooks/withMiddleDetailsSection";
import InputPrimary from "../../protons/InputPrimary";
import TextAreaPrimary from "../../protons/TextAreaPrimary";
import ButtonPrimary from "../../protons/ButtonPrimary";
import { FORM_DATA } from "../../../redux/actions/actionTypes";

const MiddleDetailsSection = withMiddleDetailsSection(() => {
  const store = useStore();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    store.dispatch({
      type: FORM_DATA,
      payload: {
        [name]: value,
      },
    });
  };

  return (
    <div className="contact-form-container">
      <InputPrimary
        name="name"
        label="_name"
        placeholder="Enter your name"
        onChange={handleOnChange}
      />
      <InputPrimary
        name="email"
        label="_email"
        type="email"
        placeholder="Enter your email"
        onChange={handleOnChange}
      />
      <TextAreaPrimary
        name="message"
        label="_message"
        placeholder="Jot down your message"
        onChange={handleOnChange}
      />
      <ButtonPrimary type="submit" buttonText="send-message" />
    </div>
  );
});

function ContactForm() {
  return <MiddleDetailsSection />;
}

export default ContactForm;
