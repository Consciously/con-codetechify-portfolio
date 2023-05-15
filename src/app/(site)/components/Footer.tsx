import React from 'react';

const Footer = () => {
	return (
		<footer className='py-4 bg-slate-950 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<p className='text-white'>
					&copy; {new Date().getFullYear()} Stefan Ihle
				</p>
				<div>
					<a href='/resume.pdf' className='mr-4 text-white'>
						Download Resume
					</a>
					<a href='mailto:your-email@example.com' className='text-white'>
						Contact Me
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
