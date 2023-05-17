import { IProject } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/clientConfig';

export const getProjects = async (): Promise<IProject[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
	);
};
