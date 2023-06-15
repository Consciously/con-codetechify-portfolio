'use client';

import React, { useState } from 'react';
import { IProject } from '@/types';
import ProjectCard from './ProjectCard';

interface IProps {
	projects: IProject[];
}

const ProjectsList = ({ projects }: IProps) => {
	return (
		<>
			{projects.map(project => (
				<ProjectCard key={project._id} project={project} />
			))}
		</>
	);
};

export default ProjectsList;
