'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FilterComponent from './FilterComponent';

const FilterSidebar = () => {
	const router = useRouter();

	return (
		<>
			<FilterComponent />
		</>
	);
};

export default FilterSidebar;
