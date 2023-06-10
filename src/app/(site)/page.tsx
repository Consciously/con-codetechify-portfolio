import Image from 'next/image';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import PostCard from './components/PostCard';
import profileImg from '@/public/images/me.jpg';
import ButtonComponent from './components/ButtonComponent';
import {
	getFilteredProjectsForHome,
	getFilteredPostsForHome,
	getSkills,
} from '@/sanity/sanityUtils';

export default async function Home() {
	const projects = await getFilteredProjectsForHome();

	const skills = await getSkills();

	const posts = await getFilteredPostsForHome();

	return (
		<>
			<section className='bg-slate-900 py-20 md:h-screen'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex flex-col h-full justify-center'>
						<h1 className='bg-gradient-to-r from-white via-rose-500 to-rose-950 bg-clip-text text-transparent text-5xl md:text-7xl font-medium md:font-semibold mb-8 uppercase text-center'>
							Welcome to Codetechify
						</h1>
						<div className='flex flex-col md:flex-row gap-x-8 justify-center items-center'>
							<div className='w-full md:w-1/2 bg-slate-700 rounded-lg shadow-lg flex flex-col items-center justify-center gap-8 p-4'>
								<div className='w-64 h-64 rounded-full overflow-hidden relative object-cover'>
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
							<div className='w-full lg:w-1/2 border-4 border-slate-700 rounded-lg shadow-lg mt-8 md:mt-0 text-center md:text-left flex flex-col justify-center p-4'>
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
								<div className='flex justify-center items-center w-full'>
									<ButtonComponent href='/' isPrimary>
										Let&apos;s Connect
									</ButtonComponent>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='container mx-auto flex justify-center items-center px-4 py-8'>
				<div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:flex-wrap w-full md:w-2/3 gap-y-4 md:gap-8 xl:gap-16'>
					{skills.map(skill => (
						<SkillCard key={skill._id} skill={skill} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className='text-xl lg:text-3xl text-center my-8'>
					Featured Projects
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
					{projects.map(project => (
						<ProjectCard key={project._id} project={project} />
					))}
				</div>
			</section>
			<section className='container mx-auto px-4 py-8'>
				<h2 className='text-xl lg:text-3xl text-center my-8'>
					Recent Blog Posts
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
					{posts.map(post => (
						<PostCard key={post._id} post={post} />
					))}
				</div>
			</section>
		</>
	);
}
