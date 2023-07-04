'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { IProject } from '@/types';
import { getProject } from '@/sanity/sanityUtils';

interface IProjectContext {
	project: IProject;
	setSlug: React.Dispatch<React.SetStateAction<string>>;
}

interface IProps {
	children: React.ReactNode;
}

const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export const ProjectProvider = ({ children }: IProps) => {
	const [project, setProject] = useState<IProject>();
	const [slug, setSlug] = useState<string>('');

	useEffect(() => {
		const fetchProject = async () => {
			const project = await getProject(slug);
			setProject(project);
		};

		fetchProject();
	}, [slug, project]);

	return (
		<ProjectContext.Provider
			value={{
				project: project!,
				setSlug,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProjectCtx = () => {
	const context = useContext(ProjectContext);

	if (context === undefined) {
		throw new Error('useProjectCtx must be used within ProjectProvider');
	}

	return context;
};
