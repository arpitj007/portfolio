import React from "react";

import ButtonPrimary from "../protons/ButtonPrimary";
import { FEATURED_PROJECTS } from "../../constants/about-me";

function ProjectDescription() {
  return FEATURED_PROJECTS.map((project) => (
    <div className="project-description__item" key={project.title}>
      <img
        src={project.image}
        alt="project"
        className="project-description__image"
      />
      <div className="project-description__text">
        <p className="project-description__text--title">{project.title}</p>
        <p className="project-description__text--description">
          {project.description}
        </p>
        <ButtonPrimary buttonText={project.buttonText} />
      </div>
    </div>
  ));
}

export default ProjectDescription;
