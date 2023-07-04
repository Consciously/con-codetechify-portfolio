import React from 'react';
import ProjectsList from '../components/ProjectsList';
import FilterSidebar from '../components/FilterSidebar';
import { getProjects } from '@/sanity/sanityUtils';

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<>
			<div className='basis-full md:basis-1/4 xl:basis-1/5 flex-auto'>
				<FilterSidebar />
			</div>
			<div className='basis-full md:basis-3/4 xl:basis-4/5 flex-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<ProjectsList projects={projects} />
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
