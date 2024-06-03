import React from "react";

const withMiddleDetailsSection = (Component) => (props) => {
  return (
    <div className="middle-details-section">
      <Component {...props} />
    </div>
  );
};

export default withMiddleDetailsSection;
