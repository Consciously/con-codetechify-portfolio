import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='py-4 bg-slate-950 text-white'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
				<Link href='/' className='text-lg font-bold text-white uppercase'>
					codetechify.com
				</Link>
				<nav>
					<ul className='flex flex-col md:flex-row  md:space-x-4'>
						<li>
							<Link href='/projects' className='uppercase font-semibold'>
								Projects
							</Link>
						</li>
						<li>
							<Link href='/blog' className='uppercase font-semibold'>
								Blog
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
