import { getPost } from '@/sanity/sanityUtils';
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import CodeComponent from '../../components/CodeComponent';
import { ContentComponent } from '../../components/ContentComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { ICodeBlock } from '@/types';

interface IProps {
	params: {
		slug: string;
	};
}

export const generateMetadata = async ({
	params,
}: IProps): Promise<Metadata> => {
	const slug = params.slug;

	const postMeta = await getPost(slug);

	return {
		title: `${postMeta.title} | codetechify.com`,
	};
};

const codeBlock = ({ value }: ICodeBlock) => {
	return <CodeComponent value={value} />;
};

const components: PortableTextComponents = {
	types: {
		code: codeBlock,
	},
	block: {
		h2: ContentComponent,
		h3: ContentComponent,
	},
	list: {
		bullet: ({ children }) => <ul className='ml-8'>{children}</ul>,
	},
	listItem: {
		bullet: ({ children }) => (
			<li
				className='bg-slate-500 text-white'
				style={{ listStyleType: 'disclosure-closed' }}
			>
				<span className='inline-block bg-white text-slate-500 px-2 mb-2 drop-shadow-lg'>
					{children}
				</span>
			</li>
		),
	},
};

const PostDetail = async ({ params }: IProps) => {
	const slug = params.slug;
	const post = await getPost(slug);

	return (
		<section className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
			<div className='flex flex-col order-2 md:order-1 md:basis-1/2 md:flex-1'>
				<figure className='bg-slate-500 flex justify-center, items-center mb-2 rounded-lg shadow-lg shadow-slate-900'>
					<Image
						src={post.image}
						alt={post.title}
						width={700}
						height={350}
						className='w-full h-auto rounded-lg'
					/>
				</figure>
				<div className='flex flex-col p-4 bg-slate-500 mt-2 rounded-lg shadow-lg shadow-slate-900 gap-y-4'>
					<PortableText value={post.content} components={components} />
				</div>
			</div>
			<div className='flex flex-col order-1 md:order-2 relative md:basis-1/2 md:flex-1 gap-4'>
				<div className='flex justify-center items-center w-1/4 mx-auto'>
					<ButtonComponent isLight href='/'>
						← Back to Home
					</ButtonComponent>
				</div>
				<div className='p-4 bg-slate-500 rounded-lg shadow-lg shadow-slate-900'>
					<h1 className='bg-gradient-to-r from-white via-rose-500 to-rose-950 bg-clip-text text-transparent text-5xl md:text-7xl font-medium md:font-semibold mb-8 uppercase text-center'>
						{post.title}
					</h1>
					<p className='mt-2'>
						Created at: {format(new Date(post._createdAt), 'dd.MM. yyyy')}
					</p>
				</div>
			</div>
		</section>
	);
};

export default PostDetail;
