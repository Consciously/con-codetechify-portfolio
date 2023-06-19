'use client';

import React from 'react';
import { useFilter } from '../context/FilterContext';
import { IProject } from '@/types';
import ProjectCard from './ProjectCard';

interface IProps {
	projects: IProject[];
}

const ProjectsList = ({ projects }: IProps) => {
	const { checkedYears, checkedMonths } = useFilter();

	const filteredProjects = projects.filter(project => {
		const projectYear = new Date(project._createdAt).getFullYear();
		const projectMonth = new Date(project._createdAt).toLocaleString(
			'default',
			{ month: 'long' },
		);

		return (
			(checkedYears.length === 0 || checkedYears.includes(projectYear)) &&
			(checkedMonths.length === 0 || checkedMonths.includes(projectMonth))
		);
	});

	return (
		<>
			{filteredProjects.map(project => (
				<ProjectCard key={project._id} project={project} />
			))}
		</>
	);
};

export default ProjectsList;
