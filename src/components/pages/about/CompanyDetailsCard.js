import React from "react";
import bolt from "../../../assets/icons/bolt-up-left.svg";

function CompanyDetailsCard({
  name,
  url,
  logo,
  description,
  location,
  technologies,
}) {
  return (
    <div className="company-details-card">
      <img src={bolt} alt={"bolt"} className="bolt-top-left" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-left" />
      <img src={bolt} alt={"bolt"} className="bolt-top-right" />
      <img src={bolt} alt={"bolt"} className="bolt-bottom-right" />
      <div className="company-details-container">
        <h4 className="company-details-card__title text-black heading">
          {name}
        </h4>
        <div className="company-details-card__logo">
          <img src={logo} alt={name} />
        </div>
        <div className="company-details-card__description">
          <p>{description}</p>
        </div>
        <div className="company-details-card__location">
          <p>{location}</p>
        </div>
        <div className="company-details-card__technologies">
          <p>{technologies}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsCard;
