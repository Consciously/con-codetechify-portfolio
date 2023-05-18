import React from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectProp {
	project: IProject;
}

const ProjectCard = ({ project }: IProjectProp) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<div className='p-4 bg-rose-500 hover:bg-rose-600 rounded-lg shadow-md shadow-slate-800 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start h-full transition'>
				<figure className='flex-auto basis-1/4 mb-4 md:mr-4 object-cover h-full flex items-center'>
					<Image
						src={project.image}
						width={150}
						height={150}
						alt={project.title}
					/>
				</figure>
				<div className='flex-auto basis-3/4'>
					<h3 className='text-lg font-semibold text-white text-center md:text-left'>
						{project.title}
					</h3>
					<p className='mt-2 text-white text-center md:text-left'>
						{project.description}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
