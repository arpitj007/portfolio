import React from "react";

import ButtonPrimary from "../../protons/ButtonPrimary";
import Chip from "../../protons/Chip";

function ProjectCard({ project }) {
  const {
    title,
    oneLiner,
    banner,
    logo,
    tags,
    stats,
    client,
    miniDescription,
    url = null,
  } = project;
  return (
    <div className="project-card">
      <div className="project-top-section">
        <img className="project-banner" src={banner} alt="porter-banner" />
        <img className="avatar" src={logo} alt="porter-logo" />
      </div>
      <div className="project-details">
        <h4 className="project-title">{title}</h4>
        <p className="project-one-liner">{oneLiner}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <Chip tag={tag} />
          ))}
        </div>

        <div className="project-stats">
          {Object.keys(stats).map((stat) => (
            <div className="project-stat">
              <span className="project-stat-value">{stats[stat]}</span>
              <span className="project-stat-label">{stat}</span>
            </div>
          ))}
        </div>
        <div className="project-client-info">
          <span className="project-client-name">{client.name}</span>
          <span className="project-client-company">{client.company}</span>
        </div>
        <div className="project-mini-description">{miniDescription}</div>
        <ButtonPrimary
          buttonText="Link to Project"
          onClick={() => {
            if (url) {
              window.open(url, "_blank");
            }
          }}
          disabled={!url}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
