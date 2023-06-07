import React from 'react';
import type { PortableTextBlockComponent } from '@portabletext/react';

export const ContentComponent: PortableTextBlockComponent = ({
	value,
	children,
}) => {
	let render: React.JSX.Element = <></>;

	switch (value.style) {
		case 'h2':
			render = <h2 className='bg-rose-700'>{children}</h2>;
			break;

		case 'h3':
			render = <h3 className='bg-rose-500'>{children}</h3>;
			break;

		default:
			break;
	}

	return <>{render}</>;
};
