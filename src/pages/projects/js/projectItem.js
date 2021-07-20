import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from '../style/projects.modules.scss';


const ProjectItem = ({ project }) => {


	return (
		<div className={Style.Project} style={{ backgroundColor: `${project.themeColor}` }}>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
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
	"themeColor": "#D5C5AC"
*/




ProjectItem.propTypes = {
	project: PropTypes.object.isRequired
}


export default ProjectItem;