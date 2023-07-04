'use client';

import React, { useEffect } from 'react';
import Modal from '@/app/(site)/components/ModalComponent';
import ExtendedProjectCard from '@/app/(site)/components/ExtendedProjectCard';
import { useProjectCtx } from '@/app/(site)/context/ProjectContext';

const ProjectModal = () => {
	const { project } = useProjectCtx();

	return (
		<Modal>
			<ExtendedProjectCard project={project} />
		</Modal>
	);
};

export default ProjectModal;
