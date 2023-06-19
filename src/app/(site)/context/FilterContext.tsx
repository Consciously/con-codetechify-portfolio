'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IFilterYearMonthProject } from '@/types';
import { getProjectYears, getProjectMonths } from '@/sanity/sanityUtils';

interface IFilterContext {
	checkedYears: number[];
	setCheckedYears: React.Dispatch<React.SetStateAction<number[]>>;
	checkedMonths: string[];
	setCheckedMonths: React.Dispatch<React.SetStateAction<string[]>>;
	years: IFilterYearMonthProject[];
	months: IFilterYearMonthProject[];
}

interface IProps {
	children: React.ReactNode;
}

const FilterContext = createContext<IFilterContext | undefined>(undefined);

export const FilterProvider = ({ children }: IProps) => {
	const [checkedYears, setCheckedYears] = useState<number[]>([]);
	const [checkedMonths, setCheckedMonths] = useState<string[]>([]);
	const [years, setYears] = useState<IFilterYearMonthProject[]>([]);
	const [months, setMonths] = useState<IFilterYearMonthProject[]>([]);

	useEffect(() => {
		const fetchYearsAndMonths = async () => {
			// const [yearsData, monthsData] = await Promise.all([
			// 	getProjectYears(),
			// 	getProjectMonths(),
			// ]);

			const yearsData = await getProjectYears();
			const monthsData = await getProjectMonths();

			setYears(yearsData);
			setMonths(monthsData);
		};

		fetchYearsAndMonths();
	}, []);

	return (
		<FilterContext.Provider
			value={{
				checkedYears,
				setCheckedYears,
				checkedMonths,
				setCheckedMonths,
				years,
				months,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => {
	const context = useContext(FilterContext);

	if (context === undefined) {
		throw new Error('useFilter must be used within a FilterProvider');
	}

	return context;
};
