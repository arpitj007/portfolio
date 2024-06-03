import React from "react";
import HelmetConfig from "../../../common/HelmetConfig";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects-container">
      <HelmetConfig title="Projects" />
      <div className="large-heading mb-0">Projects</div>
      <div className="projects-cards">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
