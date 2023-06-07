import React, { ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
	children: ReactNode;
	isPrimary?: boolean;
	isOutline?: boolean;
	href: string;
}

const ButtonComponent = ({ isPrimary, isOutline, children, href }: IProps) => {
	let render: React.JSX.Element = <></>;

	if (isPrimary && isOutline) {
		render = (
			<Link
				href={href}
				className='p-4 border-2 border-slate-950 text-slate-950 hover:border-slate-500 hover:text-slate-500 rounded-lg shadow-lg shadow-slate-900 flex justify-center transition'
			>
				{children}
			</Link>
		);
	} else if (isPrimary) {
		render = (
			<Link
				href={href}
				className='p-4 bg-slate-500 text-white hover:bg-slate-950 rounded-lg shadow-lg shadow-slate-900 flex justify-center'
			>
				{children}
			</Link>
		);
	} else {
		render = (
			<Link
				href={href}
				className='p-4 bg-slate-950 text-white hover:bg-slate-500 rounded-lg shadow-lg shadow-slate-900 flex justify-center'
			>
				{children}
			</Link>
		);
	}

	return <div className='w-1/4 mx-auto'>{render}</div>;
};

export default ButtonComponent;
