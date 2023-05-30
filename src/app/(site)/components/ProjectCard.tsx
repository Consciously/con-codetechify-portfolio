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
			<div className='p-4 bg-transparent text-rose-500 hover:bg-rose-500 border-2 border-slate-900 hover:border-transparent hover:text-slate-950 rounded-lg shadow-md shadow-slate-800 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start h-full transition'>
				<figure className='flex-auto basis-1/4 mb-4 md:mr-8 object-cover h-full flex items-center'>
					<Image
						src={project.image}
						width={150}
						height={150}
						alt={project.title}
					/>
				</figure>
				<div className='flex-auto basis-3/4'>
					<h3 className='text-2xl font-semibold text-center md:text-left mb-8'>
						{project.title}
					</h3>
					{/* <div className='border-b-2 border-slate-800'></div> */}
					<p className='mt-8 text-lg text-white text-center md:text-left'>
						{project.description}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
