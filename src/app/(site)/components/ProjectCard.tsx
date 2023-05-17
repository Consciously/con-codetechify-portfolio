import React from 'react';
import { IProject } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

interface IProjectProp {
	project: IProject;
}

const ProjectCard = ({ project }: IProjectProp) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className='hover:scale-105 transition'
		>
			<div className='p-4 bg-rose-500 rounded-lg shadow-md shadow-slate-800'>
				<div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start'>
					<figure className='flex-auto basis-1/5 mb-4 md:mr-4 object-contain'>
						<Image
							src={project.image}
							width={150}
							height={150}
							alt={project.title}
							className='w-32 h-auto'
						/>
					</figure>
					<div className='flex-auto basis-4/5'>
						<h3 className='text-lg font-semibold text-white text-center md:text-left'>
							{project.title}
						</h3>
						<p className='mt-2 text-white text-center md:text-left'>
							{project.description}
						</p>
						<div className='flex justify-center md:justify-start'>
							<button className=' mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'>
								View Project
							</button>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
