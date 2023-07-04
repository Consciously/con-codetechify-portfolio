import React from 'react';
import Modal from '@/app/(site)/components/ModalComponent';
import ExtendedProjectCard from '@/app/(site)/components/ExtendedProjectCard';
import { getProject } from '@/sanity/sanityUtils';

interface IProps {
	params: {
		slug: string;
	};
}

const ProjectModal = async ({ params }: IProps) => {
	const slug = params.slug;

	const project = await getProject(slug);

	return (
		<Modal>
			<ExtendedProjectCard project={project} />
		</Modal>
	);
};

export default ProjectModal;
