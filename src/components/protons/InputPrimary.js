import React from "react";

function InputPrimary({
  name = "name",
  label = "_name",
  type = "text",
  ...props
}) {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input type={type} {...props} className="input-box" name={name} />
    </div>
  );
}

export default InputPrimary;
