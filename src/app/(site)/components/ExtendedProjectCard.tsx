'use client';

import React from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import ButtonComponent from './ButtonComponent';

interface IProp {
	project: IProject;
}

const ExtendedProjectCard = ({ project }: IProp) => {
	const router = useRouter();
	const pathname = usePathname();
	const handleClick = () => {
		router.push(`/projects/hover/${project.slug}`);
		if (pathname === `/projects/hover/${project.slug}`) {
			window.location.replace(`/projects/${project.slug}`);
		}
	};

	return (
		<div className='flex justify-center' onClick={handleClick}>
			<figure className='relative w-5/12 overflow-hidden'>
				<Image
					src={project.image}
					alt={project.title}
					fill
					className='object-cover w-full md:w-48 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg'
				/>
			</figure>
			<div className='flex flex-col justify-center w-7/12 h-auto gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 rounded-lg rounded-t-none md:rounded-r-lg md:rounded-l-none transition duration-300 shadow-lg shadow-slate-950 cursor-pointer'>
				<h3 className='text-lg lg:text-2xl font-bold'>{project.title}</h3>
				<p>{project.description}</p>
				<div className='flex flex-col md:flex-row gap-4'>
					<ButtonComponent isDark href={project.liveDemo}>
						Live Demo
					</ButtonComponent>
					<ButtonComponent isDark href={project.githubRepository}>
						Github
					</ButtonComponent>
				</div>
			</div>
		</div>
	);
};

export default ExtendedProjectCard;
