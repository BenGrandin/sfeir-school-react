import React, { FC } from 'react';


type CardProps = {
	title: string;
};

export const Card: FC<CardProps> = ({ title }) => {
	return (
		<div style={{ background: 'bisque', padding: '1rem', borderRadius: '10%' }}>
			<p>{title}</p>
		</div>
	);
};
