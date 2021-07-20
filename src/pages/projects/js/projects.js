import React from 'react';
import ProjectsIcon from '../../../assets/images/projects.svg';
import Style from '../style/projects.modules.scss';
import ProjectItem from './projectItem';
import { ProjectsList } from './projectList';

const Projects = () => {
	return (
		<div className="page">
			<div className={Style.projectsIconContainer}>
				<ProjectsIcon />
			</div>
			<div>
				{ProjectsList.map((project, index) => <ProjectItem key={index} project={project} /> )}
			</div>
		</div>
	);
}


export default Projects;