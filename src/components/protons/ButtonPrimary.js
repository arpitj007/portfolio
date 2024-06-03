import React from "react";

const INITIAL_STATE = {
  buttonText: "Click me",
  onClick: () => {},
};

function ButtonPrimary({
  buttonText = INITIAL_STATE.buttonText,
  onClick = INITIAL_STATE.onClick,
  ...props
}) {
  return (
    <button {...props} className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default ButtonPrimary;
