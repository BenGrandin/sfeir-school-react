import React from 'react';
import { Card, CardHeader, CardImage, CardInfo } from './Card';

type PersonCardProps = {
	randomPerson: Person;
	className?: string;
};

export const PersonCard: React.FC<PersonCardProps> = ({ randomPerson,className }) => (
	<Card className={className}>
		<CardImage
			url={randomPerson.photo}
			desc={`face of ${randomPerson.firstname}`}
		/>

		<CardHeader
			title={<a href={'/person/' + randomPerson.id}>{`${randomPerson.firstname} ${randomPerson.lastname}`}</a>}
			subTitle={randomPerson.position}
		/>

		<CardInfo icon="email">
			{/* ToDo: Check href*/}
			<a href={`mailto:${randomPerson.email}`}>{randomPerson.email}</a>
		</CardInfo>

		<CardInfo icon="phone">
			<a href={'tel:' + randomPerson.phone}>{randomPerson.phone}</a>
		</CardInfo>

		{
			randomPerson.manager &&
			<CardInfo icon="supervisor_account" desc="manager">
				<a href={'/person/' + randomPerson.managerId}>{randomPerson.manager}</a>
			</CardInfo>
		}

	</Card>
);
