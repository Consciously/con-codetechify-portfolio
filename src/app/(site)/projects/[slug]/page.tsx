import { getProject } from '@/sanity/sanityUtils';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import CodeBlock from '../../components/CodeBlock';
import { ICodeBlock } from '@/types';

interface IProps {
	params: {
		slug: string;
	};
}

const codeBlock = ({ value }: ICodeBlock) => {
	return <CodeBlock value={value} />;
};

const components = {
	types: {
		code: codeBlock,
	},
};

const page = async ({ params }: IProps) => {
	const slug = params.slug;
	const project = await getProject(slug);

	return (
		<section className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
			{/* <Link href='/' className='text-blue-500 underline'>
				← Back to Home
			</Link> */}
			<div className='flex flex-col order-2 md:order-1 md:basis-1/2 md:flex-1'>
				<figure className='bg-slate-500 flex justify-center, items-center mb-2 rounded-lg shadow-lg shadow-slate-900'>
					<Image
						src={project.image}
						alt={project.title}
						width={700}
						height={350}
						className='w-full h-auto rounded-lg'
					/>
				</figure>
				<div className='p-4 bg-slate-500 mt-2 rounded-lg shadow-lg shadow-slate-900'>
					<PortableText value={project.content} components={components} />
				</div>
			</div>
			<div className='flex flex-col order-1 md:order-2 relative md:basis-1/2 md:flex-1'>
				<div className='p-4 bg-slate-500 rounded-lg shadow-lg shadow-slate-900'>
					<h1 className='bg-gradient-to-r from-white via-rose-500 to-rose-950 bg-clip-text text-transparent text-5xl md:text-7xl font-medium md:font-semibold mb-8 uppercase text-center'>
						{project.title}
					</h1>
					<p className='mt-2'>
						Created at: {format(new Date(project._createdAt), 'dd.MM. yyyy')}
					</p>
					<a
						className='text-blue-500 underline'
						href={project.githubRepository}
						target='_blank'
						rel='noreferrer'
					>
						View on Github
					</a>
					<a
						className='ml-4 text-blue-500 underline'
						href={project.liveDemo}
						target='_blank'
						rel='noreferrer'
					>
						View Live Demo
					</a>
				</div>
				<ul className='p-4 flex flex-col items-center justify-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-slate-500 rounded-lg shadow-lg shadow-slate-900 w-1/2'>
					{project.technologies.map((technology, idx) => (
						<li key={idx} className='mt-4 uppercase'>
							{technology}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default page;
