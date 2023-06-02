import React from 'react';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getProject } from '@/sanity/sanityUtils';
import Link from 'next/link';
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

const ProjectPage = async ({ params }: IProps) => {
	const slug = params.slug;
	const project = await getProject(slug);

	return (
		<div className='container mx-auto px-4'>
			<Link href='/' className='text-blue-500 underline'>
				← Back to Home
			</Link>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
				<Image
					className='w-auto h-auto object-contain relative'
					src={project.image}
					alt={project.title}
					width={700}
					height={350}
				/>
				<div>
					<h1 className='text-4xl'>{project.title}</h1>
					<p className='mt-2'>
						Created at: {format(new Date(project._createdAt), 'dd.MM. yyyy')}
					</p>
				</div>
				<div className='col-span-2'>
					<h2 className='text-2xl'>Technologies Used:</h2>
					{project.technologies.map((tech, index) => (
						<p key={index}>{tech}</p>
					))}
				</div>
				<div className='col-span-2'>
					<h2 className='text-2xl'>Project Content:</h2>
					<PortableText value={project.content} components={components} />
					<div className='mt-4'>
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
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
