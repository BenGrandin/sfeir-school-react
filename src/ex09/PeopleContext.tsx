import React, { createContext, useEffect, useState } from 'react';
import { loadPeople } from '../utils';

type PeopleContext = {
	people: People;
	loading: boolean;
	// getPersonById: (id: string) => Person | undefined;
	// updatePerson: (person: Person) => Promise<void>;
};

export const PeopleContext = createContext<PeopleContext>({
	people: [],
	loading: null
});

export const PeopleProvider: React.FC = ({ children }) => {
	const [people, setPeople] = useState<People >([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		loadPeople().then(setPeople).finally(() => {
			setLoading(false);
		});
	}, []);

	const context = { loading, people };
	console.log({ people });

	return <PeopleContext.Provider value={context}>{children}</PeopleContext.Provider>;
};
