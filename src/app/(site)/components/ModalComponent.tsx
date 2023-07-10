'use client';

import React, { useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IProps {
	children: React.ReactNode;
}

const Modal = ({ children }: IProps) => {
	const overlay = useRef<HTMLDivElement>(null);
	const wrapper = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const handleDismiss = useCallback(() => {
		router.back();
	}, [router]);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				handleDismiss();
			}
		},
		[handleDismiss, overlay, wrapper],
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') handleDismiss();
		},
		[handleDismiss],
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	return (
		<div
			ref={overlay}
			className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'
			onClick={handleClick}
		>
			<div
				ref={wrapper}
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full sm:w-10/12 md:w-5/12 p-4'
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
