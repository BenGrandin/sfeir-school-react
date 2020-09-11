import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Header, HeaderActionItem } from '../solution/Header';
import { SearchableList } from '../ex05/SearchableList';
import { Player } from '../ex05/Player';
import { PersonPage } from '../ex07/Person';
import { PeopleProvider } from './PeopleContext';

export const App: React.FC = () => {

	return (
		<>
			<Header>
				<HeaderActionItem to="/player" icon="view_carousel" />
				<HeaderActionItem to="/list" icon="view_module" />
			</Header>

			<PeopleProvider>
				<Switch>
					<Route path="/list" render={() => <SearchableList />} />
					<Route path="/player" render={() => <Player />} />
					<Route exact path="/person/:id" render={() => <PersonPage />} />
					<Redirect to="/list" />
				</Switch>
			</PeopleProvider>
		</>
	);
};
