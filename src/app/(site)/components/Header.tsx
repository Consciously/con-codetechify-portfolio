import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='py-4 bg-indigo-700 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/' className='text-2xl font-bold text-yellow-300'>
					Stefan Ihle
				</Link>
				<nav>
					<ul className='flex space-x-4'>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/projects'>Projects</Link>
						</li>
						<li>
							<Link href='/blog'>Blog</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
