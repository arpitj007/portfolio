import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "../pages/projects/ProjectCard";
import { projects } from "../../constants/projects";

function ProjectDescriptionContainer() {
  return (
    <div className="project-description__container">
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          scale: [1, 1.5, 1],
          borderRadius: ["8px", "100%", "8px"],
        }}
        transition={{
          delay: 4,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <h3 className="project-description__title">Featured Project</h3>
      </motion.div>
      <ProjectCard project={projects[0]} />
    </div>
  );
}

export default ProjectDescriptionContainer;
