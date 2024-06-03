import React from "react";
import HelmetConfig from "../../../common/HelmetConfig";
import ProjectCard from "./ProjectCard";

import { projects } from "../../../constants/projects";
import MediumHeading from "../../atoms/MediumHeading";

function Projects() {
  return (
    <div className="projects-container">
      <HelmetConfig title="Projects" />
      <MediumHeading text="Projects" color="white" />
      <p>Here are some of the projects I've worked on.</p>
      <div className="projects-cards">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
