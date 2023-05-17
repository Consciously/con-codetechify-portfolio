import Image from 'next/image';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import profileImg from '@/public/images/me.jpg';
import { spaceMono } from './layout';
import { getProjects } from '@/sanity/sanityUtils';

export default async function Home() {
	const projects = await getProjects();

	// Dummy Data
	const skills = [
		{ id: '1', title: 'JavaScript', description: 'Expert in JavaScript' },
		{ id: '2', title: 'React', description: 'Expert in React' },
		{ id: '3', title: 'Next.js', description: 'Expert in Next.js' },
		{ id: '4', title: 'REST Api', description: 'Expert in REST Api' },
		// Add more skills as needed
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
			<section className='bg-slate-900 text-white py-20 md:h-screen'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex flex-col h-full justify-center'>
						<h1
							className={`text-3xl md:text-5xl font-medium mb-8 uppercase text-center ${spaceMono.className}`}
						>
							Welcome to Codetechify
						</h1>
						<div className='flex flex-col md:flex-row h-full gap-x-8 justify-center items-center'>
							<div className='w-full md:w-1/2 bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-8'>
								<div className='w-64 h-64 rounded-full overflow-hidden relative object-'>
									<Image
										src={profileImg}
										alt='Stefan Ihle'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</div>
								<blockquote className='italic text-center'>
									<span className='block mb-2'>
										&ldquo;Talk is cheap. Show me the code.&rdquo;
									</span>
									<cite>— Linus Torvalds</cite>
								</blockquote>
							</div>
							<div className='w-full md:w-1/2 border-4 border-slate-700 p-6 rounded-lg shadow-lg mt-8 md:mt-0 text-center md:text-left flex flex-col justify-center'>
								<p className='mb-4 text-lg leading-relaxed'>
									<span className='font-semibold'>Hello!</span> I&apos;m Stefan
									Ihle, a self-taught web developer who&apos;s fueled by an
									insatiable curiosity and a profound passion for the tech
									universe. I&apos;m a lifelong learner, always eager to delve
									into new topics within this vibrant industry, while also
									honing my specialist knowledge in certain key areas. This
									fascinating journey, combined with my constant readiness to
									immerse myself in the latest tech developments, has led me to
									become a generalized specialist—someone who thrives on the
									breadth of the tech landscape and savors the depth of specific
									subjects.
								</p>
								<button className='bg-yellow-500 text-gray-800 rounded px-6 py-2 mt-4 hover:bg-yellow-600 transition-colors self-center'>
									Let&apos;s Connect
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{skills.map(skill => (
						<SkillCard key={skill.id} skill={skill} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className={`text-3xl text-center my-8 ${spaceMono.className}`}>
					Featured Projects
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{projects.map(project => (
						<ProjectCard key={project._id} project={project} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className={`text-3xl text-center my-8 ${spaceMono.className}`}>
					Recent Blog Posts
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{blogPosts.map(post => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</section>
		</>
	);
}
