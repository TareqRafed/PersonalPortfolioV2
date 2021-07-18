import React from 'react';
import ProjectsIcon from '../../../assets/images/projects.svg';
import Style from '../style/projects.modules.scss'

const Projects = () => {


	return (
		<div className="page">
			<div className={Style.projectsIconContainer}>
				<ProjectsIcon />
			</div>
			<div>
				<div className={Style.Project}>x</div>
				<div className={Style.Project}></div>
				<div className={Style.Project}></div>
				<div className={Style.Project}></div>
			</div>
		</div>
	);
}


export default Projects;