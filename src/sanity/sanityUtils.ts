import { IProject, IPost, ISkill } from '@/types';
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

export const getFilteredProjectsForHome = async (): Promise<IProject[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "project"]|order(_updatedAt desc)[0..2]{
      _id,
      _createdAt,
      _updatedAt,
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

export const getFilteredPostsForHome = async (): Promise<IPost[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "post"]|order(_updatedAt desc)[0..2]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      excerpt,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
	);
};

export const getPosts = async (): Promise<IPost[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      excerpt,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
	);
};

export const getPost = async (slug: string): Promise<IPost> => {
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
