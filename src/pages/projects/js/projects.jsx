import React from 'react';
import FadeWithMovement from '../../../animations/react-spring/fade-with-movement';
import ProjectsIcon from '../../../assets/images/projects.svg';
import Style from '../style/projects.modules.scss'
import ProjectItem from './projectItem';
import ProjectsList from './projectList'

const Projects = () => (
		<div className="page">
			<FadeWithMovement fromY="-200%">
				<div className={Style.projectsIconContainer}>
					<ProjectsIcon />
				</div>
			</FadeWithMovement>
			<FadeWithMovement fromX="-5%">
				{ProjectsList.map((project) => <ProjectItem key={project.id} project={project} />)}
			</FadeWithMovement>

		</div>
	)


export default Projects;