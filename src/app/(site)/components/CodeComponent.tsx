'use client';

import React from 'react';
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
	value: {
		language: string;
		code: string;
	};
}

const CodeComponent = ({ value }: IProps) => {
	return (
		<SyntaxHighLighter language={value.language} style={oneDark}>
			{value.code}
		</SyntaxHighLighter>
	);
};

export default CodeComponent;
