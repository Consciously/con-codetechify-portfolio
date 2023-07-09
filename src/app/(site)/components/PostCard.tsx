'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IPost } from '@/types';

interface IPostProp {
	post: IPost;
}

const PostCard = ({ post }: IPostProp) => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(true);
	};

	const onLeave = () => {
		setHover(false);
	};

	return (
		<Link
			href={`/posts/${post.slug}`}
			className='flex flex-col md:flex-row md:max-w-2xl rounded-lg shadow-lg shadow-slate-900 h-full'
		>
			<div
				className='flex flex-col justify-center items-center w-full h-64 gap-y-8 p-2 sm:p-4 lg:p-8  leading-normal border-2 border-t-0 md:border-t-2 md:border-l-0 border-slate-500 text-slate-950 hover:border-transparent bg-slate-500 hover:bg-rose-500 hover:text-white rounded-lg rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-r-none transition duration-300'
				onMouseEnter={onHover}
				onMouseLeave={onLeave}
			>
				{hover ? (
					<p className='text-base'>{post.excerpt}</p>
				) : (
					<h3 className='text-lg lg:text-2xl text-center font-bold'>
						{post.title}
					</h3>
				)}
			</div>
			<Image
				src={post.image}
				alt={post.title}
				width={200}
				height={200}
				className='object-cover w-full md:w-48 h-auto rounded-lg rounded-t-none md:rounded-none md:rounded-r-lg'
			/>
		</Link>
	);
};

export default PostCard;
