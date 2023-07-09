'use client';

import React from 'react';
import { format } from 'date-fns';
import { useFilter } from '../context/FilterContext';
import { IProject } from '@/types';
import ProjectCard from './ProjectCard';

interface IProps {
	projects: IProject[];
}

const ProjectsList = ({ projects }: IProps) => {
	const { checkedYears, checkedMonths } = useFilter();

	const filteredProjects = projects.filter(project => {
		const projectYear = parseInt(format(new Date(project._createdAt), 'yyyy'));
		const projectMonth = format(new Date(project._createdAt), 'MMMM');

		console.log({ projectYear, projectMonth });

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
