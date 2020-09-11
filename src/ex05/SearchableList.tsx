import React, { useState } from 'react';
import { TextField } from '@rmwc/textfield';
import { PersonCard } from '../solution/PersonCard';
import { Loading } from '../solution/Loading';
import { PeopleConsumer } from '../ex08/PeopleContext';

const containsSubstring = (str: string, sub: string): boolean => {
	const re = new RegExp(sub.toLowerCase(), 'i');
	return re.test(str.toLowerCase());
};

const toPersonCard = (person: Person) => (
	<PersonCard person={person} key={person.id} />
);

type SearchableListProps = {};

const DEFAULT_QUERY = '';
export const SearchableList: React.FC<SearchableListProps> = () => {
	const [query, setQuery] = useState(DEFAULT_QUERY);

	const resetQuery = () => {
		setQuery(DEFAULT_QUERY);
	};

	return (
		<>
			<PeopleConsumer>
				{people => (
					people.length === 0 ?
						<Loading /> :
						<main>{
							people
								.filter(p => {
									const fullName = p.firstname + ' ' + p.lastname;
									return containsSubstring(fullName, query);
								})
								.map(toPersonCard)}
						</main>
				)}
			</PeopleConsumer>
			
			<footer>
				<TextField
					icon="search"
					trailingIcon={{ icon: 'close', onClick: resetQuery }}
					label="search by name"
					onChange={(v) => {
						setQuery(v.currentTarget.value);
					}}
					value={query}
				/>
			</footer>
		</>
	);
};
