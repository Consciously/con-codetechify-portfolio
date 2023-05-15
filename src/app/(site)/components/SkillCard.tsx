import React from 'react';

export interface ISkill {
	id: string;
	title: string;
}

interface ISkillProp {
	skill: ISkill;
}

const SkillCard = ({ skill }: ISkillProp) => {
	return (
		<div className='p-4 bg-rose-500 rounded-lg shadow-md shadow-slate-800 flex items-center justify-center'>
			<h3 className='text-lg font-semibold text-white'>{skill.title}</h3>
		</div>
	);
};

export default SkillCard;
