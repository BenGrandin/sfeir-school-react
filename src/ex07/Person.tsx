import React, { useEffect, useState } from 'react';
import { PersonCard } from '../solution/PersonCard';
import { getPeopleById } from '../utils';
import { useParams } from 'react-router-dom';
import { Loading } from '../solution/Loading';

export const PersonPage: React.FC = () => {
	const [person, setPerson] = useState<Person>();
	const [error, setError] = useState<XMLHttpRequest>();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getPeopleById({ id })
			.then(res => {
				setPerson(res);
			})
			.catch(err => {
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [id]);

	return (

		<>
			{isLoading ? <Loading /> :
				error ? <p>Error {error.status} : {error.statusText}</p> :
					person && <PersonCard person={person} />
			}
		</>
	);
};
