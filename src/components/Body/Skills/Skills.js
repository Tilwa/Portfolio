import React from "react";
import "./Skills.css";
import Separator from "../../common/Separator/Separator";
import { SkillsData } from "../../data/Skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  const data = SkillsData;

  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
