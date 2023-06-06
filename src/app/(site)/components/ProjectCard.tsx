import React from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectProp {
	project: IProject;
}

const ProjectCard = ({ project }: IProjectProp) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className='flex flex-col md:flex-row md:max-w-2xl rounded-lg shadow-lg shadow-slate-900'
		>
			<Image
				src={project.image}
				alt={project.title}
				width={200}
				height={200}
				className='object-cover w-full md:w-48 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg'
			/>
			<div className='flex flex-col justify-center w-full h-full gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 hover:bg-rose-500 hover:text-white rounded-lg rounded-t-none md:rounded-t-lg md:rounded-l-none transition duration-300'>
				<h3 className='text-lg lg:text-2xl font-bold '>{project.title}</h3>
				<p className='text-base'>{project.description}</p>
			</div>
		</Link>
	);
};

export default ProjectCard;
