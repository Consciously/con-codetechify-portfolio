import { IProject, IPost, ISkill, IFilterYearMonthProject } from '@/types';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/clientConfig';

// Get all projects data
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

// Get all filtered projects data for home page
export const getFilteredProjectsForHomePage = async (): Promise<IProject[]> => {
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

// Get all projects years information
export const getProjectYears = async (): Promise<IFilterYearMonthProject[]> => {
	const result: IProject[] = await createClient(clientConfig).fetch(
		'*[_type == "project"]{ _id, _createdAt }',
		{ cache: 'no-store' },
	);
	const years = result.map(({ _id, _createdAt }) => ({
		_id,
		year: new Date(_createdAt).getFullYear(),
	}));
	getProjectMonths;

	const uniqueYears = Array.from(new Set(years.map(item => item.year))).map(
		year => {
			return {
				_id: years.find(item => item.year === year)?._id as string,
				year,
			};
		},
	);

	return uniqueYears;
};

// Get all projects months information
export const getProjectMonths = async (): Promise<
	IFilterYearMonthProject[]
> => {
	const result: IProject[] = await createClient(clientConfig).fetch(
		groq`*[_type == "project"]{ _id, _createdAt}`,
		{ cache: 'no-store' },
	);

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const months = result.map(({ _id, _createdAt }) => ({
		_id,
		month: monthNames[new Date(_createdAt).getMonth()],
	}));

	const uniqueMonths = Array.from(new Set(months.map(item => item.month))).map(
		month => ({
			_id: months.find(item => item.month === month)?._id as string,
			month,
		}),
	);

	return uniqueMonths;
};

// Get single project data
export const getProject = async (slug: string): Promise<IProject> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      technologies,
      content,
			description,
      "slug": slug.current,
      "image": image.asset->url,
      githubRepository,
      liveDemo
    }`,
		{ slug },
	);
};

// Get all posts data
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

// Get all filtered posts data for home page
export const getFilteredPostsForHomePage = async (): Promise<IPost[]> => {
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

// Get single post data
export const getPost = async (slug: string): Promise<IPost> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'post' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      technologies,
      content,
			excerpt,
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
