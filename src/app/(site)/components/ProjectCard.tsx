'use client';

import React, { useState } from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface IProp {
	project: IProject;
}

const ProjectCard = ({ project }: IProp) => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(true);
	};

	const onLeave = () => {
		setHover(false);
	};

	return (
		<Link href={`/projects/hover/${project.slug}`}>
			<div className='flex flex-col md:flex-row h-60 rounded-lg shadow-lg shadow-slate-900'>
				<figure className='relative w-5/12 h-full overflow-hidden'>
					<Image
						src={project.image}
						alt={project.title}
						fill
						className='object-cover w-full md:w-48 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg'
					/>
				</figure>
				<div
					className='flex flex-col justify-center w-7/12 h-full gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 hover:bg-rose-500 hover:text-white rounded-lg rounded-t-none md:rounded-r-lg md:rounded-l-none transition duration-300'
					onMouseEnter={onHover}
					onMouseLeave={onLeave}
				>
					{hover ? (
						<p className='text-base'>{project.description}</p>
					) : (
						<h3 className='text-lg lg:text-2xl text-center font-bold'>
							{project.title}
						</h3>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
