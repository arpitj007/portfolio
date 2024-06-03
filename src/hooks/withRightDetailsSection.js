import React from "react";

export default function withRightDetailsSection(Component) {
  return (props) => (
    <>
      <div className="right-details-section">
        <Component {...props} />
      </div>
    </>
  );
}
