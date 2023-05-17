import React from 'react';

interface IProps {
	params: {
		slug: string;
	};
}

const page = ({ params }: IProps) => {
	const slug = params.slug;

	return <div>{slug}</div>;
};

export default page;
