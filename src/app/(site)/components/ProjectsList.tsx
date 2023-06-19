'use client';

import React from 'react';
import { parseISO, format } from 'date-fns';
import { useFilter } from '../context/FilterContext';
import { IProject } from '@/types';
import ProjectCard from './ProjectCard';

interface IProps {
	projects: IProject[];
}

const ProjectsList = ({ projects }: IProps) => {
	const { checkedYears, checkedMonths } = useFilter();

	const filteredProjects = projects.filter(project => {
		// Use date-fns to parse the creation date and format it as a year.
		const projectYear = format(project._createdAt, 'yyyy');

		// Use date-fns to parse the creation date and format it as a month.
		const projectMonth = format(project._createdAt, 'MMMM');

		return (
			(checkedYears.length === 0 || checkedYears.includes(+projectYear)) &&
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
