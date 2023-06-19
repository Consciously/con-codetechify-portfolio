'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterComponent from './FilterComponent';

const FilterSidebar = () => {
	const router = useRouter();

	return (
		<div className='flex justify-center w-full h-full p-4 bg-slate-500 rounded-lg shadow-lg shadow-slate-900'>
			<FilterComponent />
		</div>
	);
};

export default FilterSidebar;
