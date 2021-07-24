import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsList } from '../../projects/js/projectList';



const ProjectDetails = () => {
	const { id } = useParams();
	const project = ProjectsList.find((project) => project.id == parseInt(id));

	if (project) {
		return (
			<div>
				{project.name}
			</div>
		);
	}

	return (
		<div>
			Error 404
		</div>
	);

}


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


export default ProjectDetails;