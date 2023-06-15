'use client';

import React, { useState, useEffect } from 'react';
import { getProjectYears, getProjectMonths } from '@/sanity/sanityUtils';
import { IFilterYearMonthProject } from '@/types';

const FilterComponent = () => {
	const [years, setYears] = useState<IFilterYearMonthProject[]>([]);
	const [months, setMonths] = useState<IFilterYearMonthProject[]>([]);
	const [checkedYears, setCheckedYears] = useState<boolean[]>([]);
	const [checkedMonths, setCheckedMonths] = useState<boolean[]>([]);
	const [checkedMonthValues, setCheckedMonthValues] = useState<string[]>([]);
	const [checkedYearValues, setCheckedYearValues] = useState<number[]>([]);

	useEffect(() => {
		const fetchProjectDates = async () => {
			const fetchedYears = await getProjectYears();
			const fetchedMonths = await getProjectMonths();
			setYears(fetchedYears);
			setMonths(fetchedMonths);
			setCheckedYears(new Array(fetchedYears.length).fill(false));
			setCheckedMonths(new Array(fetchedMonths.length).fill(false));
		};

		fetchProjectDates();
	}, []);

	const handleMonthChange = (index: number) => {
		setCheckedMonths(prevCheckedMonths => {
			const newCheckedMonths = prevCheckedMonths.map((item, idx) =>
				idx === index ? !item : item,
			);

			setCheckedMonths(newCheckedMonths);

			const newCheckedMonthValues = newCheckedMonths.flatMap((checked, idx) => {
				const month = months[idx].month;
				return checked && month !== undefined ? [month] : [];
			});

			setCheckedMonthValues(newCheckedMonthValues);

			return newCheckedMonths;
		});
	};

	const handleYearChange = (index: number) => {
		setCheckedYears(prevCheckedYears => {
			const newCheckedYears = prevCheckedYears.map((item, idx) =>
				idx === index ? !item : item,
			);

			const newCheckedYearValues = newCheckedYears.flatMap((checked, idx) => {
				const year = years[idx].year;
				return checked && year !== undefined ? [year] : [];
			});

			setCheckedYearValues(newCheckedYearValues);

			return newCheckedYears;
		});
	};

	return (
		<div className='flex flex-col gap-4'>
			<div>
				<h2 className='text-xl font-bold'>Filter by Date</h2>
				<div>
					<h3 className='text-lg font-semibold'>Year</h3>
					{years.map(({ _id, year }, index) => {
						return (
							<label key={_id}>
								<input
									type='checkbox'
									value={year}
									checked={checkedYears[index]}
									onChange={() => handleYearChange(index)}
								/>
								{year}
							</label>
						);
					})}
				</div>
				<div>
					<h3 className='text-lg font-semibold'>Month</h3>
					{months.map(({ _id, month }, idx) => (
						<label key={_id}>
							<input
								type='checkbox'
								value={month}
								checked={checkedMonths[idx]}
								onChange={() => handleMonthChange(idx)}
							/>
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

export default FilterComponent;
