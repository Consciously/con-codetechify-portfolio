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
		<div className='p-4 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center'>
			<h3 className='text-lg font-semibold text-yellow-300'>{skill.title}</h3>
		</div>
	);
};

export default SkillCard;
