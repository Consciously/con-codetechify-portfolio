import React from 'react';
import ProjectsList from '../components/ProjectsList';
import FilterSidebar from '../components/FilterSidebar';
import { getProjects } from '@/sanity/sanityUtils';

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<section className='container mx-auto flex flex-col xl:flex-row px-4 py-8 w-full gap-4  lg:h-screen'>
			<div className='basis-full md:basis-1/4 xl:basis-1/5 flex-auto'>
				<FilterSidebar />
			</div>
			<div className='basis-full md:basis-3/4 xl:basis-4/5 flex-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					<ProjectsList projects={projects} />
				</div>
			</div>
		</section>
	);
};

export default ProjectsPage;
