import React from "react";

function TextAreaPrimary({
  name = "name",
  label = "_name",
  type = "text",
  rows = 5,
  ...props
}) {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <textarea
        type={type}
        rows={rows}
        {...props}
        className="input-box"
        name={name}
      />
    </div>
  );
}

export default TextAreaPrimary;
