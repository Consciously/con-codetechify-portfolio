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
		if (project._createdAt instanceof Date) {
			const projectYear = format(project._createdAt, 'yyyy');
			const projectMonth = format(project._createdAt, 'MMMM');

			return (
				(checkedYears.length === 0 || checkedYears.includes(projectYear)) &&
				(checkedMonths.length === 0 || checkedMonths.includes(projectMonth))
			);
		} else {
			return false;
		}
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
