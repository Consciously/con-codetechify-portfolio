import React from 'react';
import type { PortableTextBlockComponent } from '@portabletext/react';

export const ContentComponent: PortableTextBlockComponent = ({
	value,
	children,
}) => {
	let render: React.JSX.Element = <></>;

	switch (value.style) {
		case 'h2':
			render = (
				<h2 className='text-xl lg:text-3xl text-center uppercase'>
					{children}
				</h2>
			);
			break;

		case 'h3':
			render = <h3 className='text-lg lg:text-2xl font-bold'>{children}</h3>;
			break;

		default:
			break;
	}

	return <>{render}</>;
};
