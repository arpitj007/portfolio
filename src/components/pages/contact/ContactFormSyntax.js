import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useStore, useSelector } from "react-redux";

import withRightDetailsSection from "../../../hooks/withRightDetailsSection";

const RightDetailsSection = withRightDetailsSection(() => {
  const { formData } = useSelector((state) => state.formData);
  const buttonCodeSnippet = `const button = document.querySelector('#submit-button');

const message = {
    name: "${formData.name}",
    email: "${formData.email}",
    message: "${formData.message}",
    date: "Thu 24 Jun 2021 12:00:00 AM UTC",
};

button.addEventListener("click", async () => {
    await sendEmail(message);
});
  `;

  const CONSOLE_SNIPPETS = {
    NAME: `console.error("Error: ", "Name Cannot Be Empty");`,
    EMAIL: `console.error("Error: ", "Email Cannot Be Empty");`,
    MESSAGE: `console.error("Error: ", "Message Cannot Be Empty");`,
    ERROR: `console.error("Error: ", "Something Went Wrong");`,
    SUCCESS: `console.log("Success: ", "Message Sent Successfully");`,
    EMAIL_FORMAT: `console.error("Error: ", "Email Format is Invalid");`,
  };

  return (
    <>
      <div
        className="contact-form-syntax-container"
        style={{ maxWidth: "34rem" }}
      >
        <SyntaxHighlighter
          wrapLines
          showLineNumbers
          language="javascript"
          className="code-snippet"
          style={dracula}
        >
          {buttonCodeSnippet}
        </SyntaxHighlighter>
      </div>
    </>
  );
});
function ContactFormSyntax() {
  return <RightDetailsSection />;
}

export default ContactFormSyntax;
