import React, { useMemo, useState } from 'react';
import { PersonCard } from '../solution/PersonCard';

import { PersonForm } from './PersonForm';

type PersonProps = {
	person: Person;
};

export const PersonComponent: React.FC<PersonProps> = ({ person }) => {
	const [editing, setEditing] = useState(true);
	const actions = useMemo(
		() => [{ label: 'edit', onClick: () => setEditing(true) }],
		[]
	);

	const card = editing ? (
		<PersonForm person={person} onReset={() => setEditing(false)} />
	) : (
		<PersonCard person={person} actions={actions} />
	);

	return <main>{person ? card : '404 - this person could not be found'}</main>;
};
