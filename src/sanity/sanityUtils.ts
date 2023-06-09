import { IProject, ISkill } from '@/types';
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

export const getProject = async (slug: string): Promise<IProject> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      technologies,
      content,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
		{ slug },
	);
};

export const getPosts = async (): Promise<IProject[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "post"]{
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

export const getPost = async (slug: string): Promise<IProject> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'post' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      technologies,
      content,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
		{ slug },
	);
};

export const getSkills = async (): Promise<ISkill[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "skill"]{
      _id,
      _createdAt,
      skill
    }`,
	);
};
