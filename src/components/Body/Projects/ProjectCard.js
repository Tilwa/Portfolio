import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>

        <div className="project-links">
          {project.demo && (
            <a className="project-links" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}

          {project.github && (
            <a className="project-links" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => {
            return (
              <label className="tag" key={index}>
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={project.img} className="project-photo" alt="project image" />
    </div>
  );
};

export default ProjectCard;
