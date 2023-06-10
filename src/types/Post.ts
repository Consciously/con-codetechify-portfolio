import { PortableTextBlock } from 'sanity';

export interface IPost {
	_id: string;
	_createdAt: Date;
	_updatedAt?: Date;
	title: string;
	slug: string;
	image: string;
	excerpt: string;
	content: PortableTextBlock[];
	author?: string;
	avatar?: string;
}
