import React from "react";

function Chip({ tag, ...otherProps }) {
  return (
    <div {...otherProps} className="chip">
      {tag}
    </div>
  );
}

export default Chip;
