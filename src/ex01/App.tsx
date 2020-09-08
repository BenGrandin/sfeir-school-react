import React from 'react';
import { Card } from './Card';
import { Header } from './Header';

const message = 'React @ SFEIR';

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<main>
				<Card title={message} />
			</main>
		</>
	);
};
