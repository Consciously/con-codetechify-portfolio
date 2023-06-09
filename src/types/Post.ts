import { PortableTextBlock } from 'sanity';

export interface IPost {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	image: string;
	excerpt: string;
	content: PortableTextBlock[];
	createdAt: Date;
	author: string;
	avatar?: string;
}
