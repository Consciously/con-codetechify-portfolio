import React from 'react';

const Footer = () => {
	return (
		<footer className='py-4 bg-indigo-700 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<p className='text-gray-400'>
					&copy; {new Date().getFullYear()} Stefan Ihle
				</p>
				<div>
					<a href='/resume.pdf' className='mr-4 text-yellow-300'>
						Download Resume
					</a>
					<a href='mailto:your-email@example.com' className='text-yellow-300'>
						Contact Me
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
