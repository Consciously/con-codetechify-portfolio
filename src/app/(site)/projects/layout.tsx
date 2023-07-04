import React from 'react';

interface IProps {
	children: React.ReactNode;
}

const ProjectLayout = ({ children }: IProps) => {
	return (
		<section className='container mx-auto flex flex-col xl:flex-row px-4 py-8 w-full gap-4  lg:h-screen'>
			{children}
		</section>
	);
};

export default ProjectLayout;
