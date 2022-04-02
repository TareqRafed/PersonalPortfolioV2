import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring } from "@react-spring/core";
import { animated } from "react-spring";
import { Link } from "react-router-dom";
import Style from "../style/projects.modules.scss";

const ProjectItem = ({ project }) => {
  const [isHovered, setHoveringState] = useState(false);
  const card = useSpring({ opacity: isHovered ? 0.8 : 0 });
  const imgPos = useSpring({ translateX: isHovered ? "-30%" : "0%" });

  return (
    <Link to={`/project/${project.id}`}>
      <div
        onMouseEnter={() => setHoveringState(true)}
        onMouseLeave={() => setHoveringState(false)}
        className={Style.Project}
        style={{ backgroundColor: `${project.themeColor}` }}
      >
        <h2 style={{ color: `${project.fontColor}` }}>{project.name}</h2>
        <animated.div style={card} className={Style.cover} />
        <animated.img
          style={imgPos}
          src={project.icon}
          alt={project.description}
        />
      </div>
    </Link>
  );
};

/* 	
	Example of a project 
	id: 1,
	"name": "DYNO",
	"description": "DYNO - is an E-commerce shop to sell clothes in Amman",
	"url": "",
	"icon": '/projects/dyno.svg',
	"themeColor": "#DFE8FD",
	"fontColor" : "#1D363A"
*/

ProjectItem.propTypes = {
  project: PropTypes.node.isRequired,
};

export default ProjectItem;
