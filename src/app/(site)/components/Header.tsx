'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleNavigation = (route: string) => {
		router.push(route);
		setIsOpen(prevIsOpenState => !prevIsOpenState);
	};

	const pathVariants = {
		open: {
			d: 'M6 18L18 6M6 6l12 12',
			transition: { d: { duration: 0.3, ease: 'easeInOut' } },
		},
		closed: {
			d: 'M4 6h16M4 12h16M4 18h16',
			transition: { d: { duration: 0.3, ease: 'easeInOut' } },
		},
	};

	const menuVariants = {
		open: { opacity: 1, height: 'auto' },
		closed: { opacity: 0, height: 0 },
	};

	const transition = { duration: 0.3, ease: 'easeInOut' };

	return (
		<header className='relative bg-slate-950 text-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<Link href='/' className='text-lg font-bold text-white uppercase'>
								codetechify.com
							</Link>
						</div>
					</div>
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-4'>
							<Link
								href='/projects'
								className='uppercase font-semibold hover:text-rose-500'
							>
								Projects
							</Link>
							<Link
								href='/posts'
								className='uppercase font-semibold hover:text-rose-500'
							>
								Blog
							</Link>
						</div>
					</div>
					<div className='-mr-2 flex md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type='button'
							className='bg-slate-700 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white'
							aria-controls='mobile-menu'
							aria-expanded='false'
						>
							<span className='sr-only'>Open main menu</span>
							<motion.svg
								className='block h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
							>
								<motion.path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									variants={pathVariants}
									initial='closed'
									animate={isOpen ? 'open' : 'closed'}
								/>
							</motion.svg>
						</button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='md:hidden'
						id='mobile-menu'
						initial='closed'
						animate='open'
						exit='closed'
						variants={menuVariants}
						transition={transition}
					>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								onClick={() => handleNavigation('/projects')}
								className='uppercase text-semibold hover:text-rose-500 block px-3 py-2 rounded-md text-base font-medium'
							>
								Projects
							</a>
							<a
								onClick={() => handleNavigation('/posts')}
								className='uppercase text-semibold hover:text-rose-500 block px-3 py-2 rounded-md text-base font-medium'
							>
								Blog
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
