'use client';

import React, { useState } from 'react';
import { useFilter } from '../context/FilterContext';

const FilterComponent = () => {
	const {
		checkedYears,
		setCheckedYears,
		checkedMonths,
		setCheckedMonths,
		years,
		months,
	} = useFilter();

	const [isShowYear, setIsShowYear] = useState<boolean>(false);
	const [isShowMonth, setIsShowMonth] = useState<boolean>(false);

	const handleYearChange = (year: number, checked: boolean) => {
		setCheckedYears(
			checked ? [...checkedYears, year] : checkedYears.filter(y => y !== year),
		);
	};

	const handleMonthChange = (month: string, checked: boolean) => {
		setCheckedMonths(
			checked
				? [...checkedMonths, month]
				: checkedMonths.filter(m => m !== month),
		);
	};

	const handleYearClick = () => {
		setIsShowYear(prevShowState => !prevShowState);
	};

	const handleMonthClick = () => {
		setIsShowMonth(prevShowState => !prevShowState);
	};

	return (
		<div className='flex flex-col w-full h-fit sm:p-4 lg:p-8 border-4 border-slate-950 leading-normal text-slate-950 rounded-lg drop-shadow-lg'>
			<>
				<h2 className='text-xl font-bold mb-2'>Filter by Date</h2>
				<div>
					<h3
						className='text-lg font-semibold bg-rose-500 px-2 rounded-md mb-2'
						onClick={handleYearClick}
					>
						Year
					</h3>
					{isShowYear &&
						years.map(
							({ _id, year }) =>
								year && (
									<label key={_id}>
										<input
											type='checkbox'
											checked={checkedYears.includes(year)}
											onChange={({ target: { checked } }) =>
												handleYearChange(year, checked)
											}
											className='w-0 h-0'
										/>
										<span
											className={`mb-2 ${
												checkedYears.includes(year)
													? 'bg-rose-400'
													: 'bg-slate-700'
											} text-white px-2 inline-block w-full rounded-md`}
										>
											{year}
										</span>
									</label>
								),
						)}
				</div>
				<div>
					<h3
						className='text-lg font-semibold bg-rose-500 px-2 rounded-md mb-2'
						onClick={handleMonthClick}
					>
						Month
					</h3>
					{isShowMonth &&
						months.map(
							({ _id, month }) =>
								month && (
									<label key={_id}>
										<input
											type='checkbox'
											checked={checkedMonths.includes(month)}
											onChange={({ target: { checked } }) =>
												handleMonthChange(month, checked)
											}
											className='w-0 h-0'
										/>
										<span
											className={`mb-2 ${
												checkedMonths.includes(month)
													? 'bg-rose-400'
													: 'bg-slate-700'
											} text-white px-2 inline-block w-full rounded-md`}
										>
											{month}
										</span>
									</label>
								),
						)}
				</div>
			</>
		</div>
	);
};

export default FilterComponent;
