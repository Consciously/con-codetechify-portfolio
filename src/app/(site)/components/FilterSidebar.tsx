'use client';

import React, { useState, useEffect } from 'react';
import { getProjectYears, getProjectMonths } from '@/sanity/sanityUtils';
import { IFilterYearMonthProject } from '@/types';

const FilterSidebar = () => {
	const [years, setYears] = useState<IFilterYearMonthProject[]>([]);
	const [months, setMonths] = useState<IFilterYearMonthProject[]>([]);

	useEffect(() => {
		const fetchProjectDates = async () => {
			const fetchedYears = await getProjectYears();
			const fetchedMonths = await getProjectMonths();
			setYears(fetchedYears);
			setMonths(fetchedMonths);
		};

		fetchProjectDates();
	}, []);

	return (
		<div className='flex flex-col gap-4'>
			<div>
				<h2 className='text-xl font-bold'>Filter by Date</h2>
				<div>
					<h3 className='text-lg font-semibold'>Year</h3>
					{years.map(({ _id, year }) => {
						return (
							<label key={_id}>
								<input type='checkbox' value={year} />
								{year}
							</label>
						);
					})}
				</div>
				<div>
					<h3 className='text-lg font-semibold'>Month</h3>
					{months.map(({ _id, month }) => (
						<label key={_id}>
							<input type='checkbox' value={month} />
							{month}
						</label>
					))}
				</div>
			</div>
			<div>
				<h2 className='text-xl font-bold'>Search</h2>
			</div>
		</div>
	);
};

export default FilterSidebar;
