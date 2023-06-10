import { PortableTextBlock } from 'sanity';

export interface IProject {
	_id: string;
	_createdAt: Date;
	_updatedAt?: Date;
	title: string;
	description: string;
	content: PortableTextBlock[];
	technologies: string[];
	slug: string;
	image: string;
	githubRepository: string;
	liveDemo: string;
}
