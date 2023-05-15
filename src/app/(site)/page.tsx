import Image from 'next/image';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';

export default function Home() {
	// Dummy Data
	const skills = [
		{ id: '1', title: 'JavaScript', description: 'Expert in JavaScript' },
		{ id: '2', title: 'React', description: 'Expert in React' },
		{ id: '3', title: 'Next.js', description: 'Expert in Next.js' },
		{ id: '4', title: 'REST Api', description: 'Expert in REST Api' },
		// Add more skills as needed
	];

	const projects = [
		{ id: '1', title: 'Project 1', description: 'This is project 1' },
		{ id: '2', title: 'Project 2', description: 'This is project 2' },
		{ id: '3', title: 'Project 3', description: 'This is project 3' },
		{ id: '4', title: 'Project 4', description: 'This is project 4' },
		// Add more projects as needed
	];

	const blogPosts = [
		{ id: '1', title: 'Blog Post 1', description: 'This is blog post 1' },
		{ id: '2', title: 'Blog Post 2', description: 'This is blog post 2' },
		{ id: '3', title: 'Blog Post 3', description: 'This is blog post 3' },
		{ id: '4', title: 'Blog Post 4', description: 'This is blog post 4' },
		// Add more blog posts as needed
	];

	return (
		<>
			<section className='container mx-auto px-4 py-8'>
				<h1 className='text-4xl text-center my-8'>Welcome to My Portfolio</h1>
				<p className='text-center mb-8'>Your introduction goes here...</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{skills.map(skill => (
						<SkillCard key={skill.id} skill={skill} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className='text-3xl text-center my-8'>Featured Projects</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className='text-3xl text-center my-8'>Recent Blog Posts</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{blogPosts.map(post => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</section>
		</>
	);
}
