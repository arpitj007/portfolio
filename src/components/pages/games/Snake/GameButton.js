import React from "react";

const GameButton = ({ onUp, onDown, onLeft, onRight, isDisabled }) => {
  return (
    <div className="buttons">
      <div className="upwards">
        <input
          className="up"
          onClick={onUp}
          type="button"
          value="UP"
          disabled={isDisabled}
        />
      </div>
      <div className="sideways">
        <input
          className="left"
          onClick={onLeft}
          type="button"
          value="LEFT"
          disabled={isDisabled}
        />
        <input
          className="right"
          onClick={onRight}
          type="button"
          value="RIGHT"
          disabled={isDisabled}
        />
      </div>
      <div className="downwards">
        <input
          className="down"
          onClick={onDown}
          type="button"
          value="DOWN"
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};
export default GameButton;
