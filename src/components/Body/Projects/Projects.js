import React from "react";
import "./Projects.css";
import { ProjectData } from "../../data/Projects";
import ProjectCard from "./ProjectCard";
import Separator from "../../common/Separator/Separator";

const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>

      <div>
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
