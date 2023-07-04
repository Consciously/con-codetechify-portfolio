'use client';

import React from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface IProp {
	project: IProject;
}

const ExtendedProjectCard = ({ project }: IProp) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/projects/${project.slug}`);
	};

	return (
		<div
			className='flex flex-col md:flex-row rounded-lg shadow-lg shadow-slate-900'
			onClick={handleClick}
		>
			<Image
				src={project.image}
				alt={project.title}
				width={200}
				height={200}
				className='object-cover w-full md:w-48 h-auto rounded-t-lg md:rounded-none md:rounded-l-lg'
			/>
			<div className='flex flex-col justify-center w-full h-full gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 hover:bg-rose-500 hover:text-white rounded-lg rounded-t-none md:rounded-r-lg md:rounded-l-none transition duration-300'>
				<h3 className='text-lg lg:text-2xl font-bold'>{project.title}</h3>
			</div>
		</div>
	);
};

export default ExtendedProjectCard;
