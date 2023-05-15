import React from 'react';

export interface IBlog {
	id: string;
	title: string;
	description: string;
}

interface IBlogProp {
	post: IBlog;
}

const BlogCard = ({ post }: IBlogProp) => {
	return (
		<div className='p-4 bg-rose-500 rounded-lg shadow-md shadow-slate-800'>
			<h3 className='text-lg font-semibold text-white'>{post.title}</h3>
			<p className='mt-2 text-gray-300'>{post.description}</p>
			<button className='mt-4 inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'>
				Read More
			</button>
		</div>
	);
};

export default BlogCard;
