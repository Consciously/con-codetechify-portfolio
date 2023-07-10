import React, { ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
	children: ReactNode;
	isDark?: boolean;
	isLight?: boolean;
	isDarkOutline?: boolean;
	isLightOutline?: boolean;
	href: string;
}

const ButtonComponent = ({
	isDark,
	isLight,
	isDarkOutline,
	isLightOutline,
	children,
	href,
}: IProps) => {
	let render: React.JSX.Element = <></>;

	if (isDarkOutline) {
		render = (
			<Link
				href={href}
				className='p-4 text-center border-2 border-slate-950 text-slate-950 rounded-lg flex justify-center'
			>
				{children}
			</Link>
		);
	} else if (isLightOutline) {
		render = (
			<Link
				href={href}
				className='p-4 text-center border-2 border-slate-500 text-white rounded-lg flex justify-center'
			>
				{children}
			</Link>
		);
	} else if (isDark) {
		render = (
			<Link
				href={href}
				className='p-4 text-center bg-slate-950 text-white rounded-lg flex justify-center'
			>
				{children}
			</Link>
		);
	} else if (isLight) {
		render = (
			<Link
				href={href}
				className='p-4 text-center bg-slate-500 text-slate-950 rounded-lg flex justify-center'
			>
				{children}
			</Link>
		);
	} else {
		render = <></>;
	}

	return <div className='w-full mx-auto'>{render}</div>;
};

export default ButtonComponent;
