import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from '../style/projects.modules.scss';
import FadeWithMovement from '../../../animations/react-spring/fade-with-movement';
import { useSpring } from "@react-spring/core";
import { animated } from "react-spring";



const ProjectItem = ({ project }) => {

	const [isHovered, setHoveringState] = useState(false);
	const styles = useSpring({ opacity: isHovered ? 0.8 : 0})


	return (
		<div onMouseEnter={() => setHoveringState(true)} onMouseLeave={() => setHoveringState(false)}
			className={Style.Project} style={{ backgroundColor: `${project.themeColor}` }}>
			<h2 style={{ color: `${project.fontColor}` }}>{project.name}</h2>
			<animated.div style={styles} className={Style.cover} /> 
			<img src={project.icon} alt={project.description} />
		</div>
	);

}


/* 	
	Example of a project 
	"name": "Sticky Ball",
	"description": "Sticky ball - 2D multiplayer game for mobile phone.",
	"url": "",
	"icon": '../../../assets/images',
	"themeColor": "#D5C5AC",
	"fontColor": "#FFFFFF"
*/




ProjectItem.propTypes = {
	project: PropTypes.object.isRequired
}


export default ProjectItem;