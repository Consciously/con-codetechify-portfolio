import React from 'react';
import { IProject } from '@/types';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

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
		<div
			className='flex flex-col h-60 rounded-lg shadow-lg shadow-slate-900 relative'
			onClick={handleClick}
		>
			<Image
				src={project.image}
				alt={project.title}
				fill
				className='object-contain w-full md:w-48 h-auto rounded-lg top-60 left-0'
			/>
			<div className='flex flex-col justify-center w-full h-full gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 hover:bg-rose-500 hover:text-white rounded-lg rounded-t-none md:rounded-r-lg md:rounded-l-none transition duration-300'>
				<h3 className='text-lg lg:text-2xl font-bold'>{project.title}</h3>
			</div>
		</div>
	);
};

export default ExtendedProjectCard;
