import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '@/sanity/sanityUtils';

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<section className='container mx-auto flex flex-col md:flex-row px-4 py-8 w-full'>
			<div className='basis-full md:basis-1/4 xl:basis-1/5 flex-auto'>Left</div>
			<div className='basis-full md:basis-3/4 xl:basis-4/5 flex-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
					{projects.map(project => (
						<ProjectCard key={project._id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsPage;
