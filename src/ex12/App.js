import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Header, HeaderActionItem } from '../solution/Header';
import { SearchableListView } from '../solution/SearchableList';
import { PlayerView } from '../solution/Player';
import { Person } from '../solution/EditablePerson';
import { Loading } from '../solution/Loading';

import {
	withFilteredPeopleIds,
	withLoadPeople,
	withPeopleTriptych,
	withPersonFromPersonId,
	withPersonHandlers
} from './connect';
// } from "../solution/ex12/connect";

const ConnectedList = withFilteredPeopleIds(SearchableListView);
const ConnectedPlayer = withPeopleTriptych(PlayerView);
const ConnectedPerson = withPersonFromPersonId(withPersonHandlers(Person));

export const App = withLoadPeople(({ loadPeople, loading }) => {
	useEffect(() => void loadPeople(), [loadPeople]);
	return (
		<>
			<Header>
				<HeaderActionItem to="/player" icon="view_carousel" />
				<HeaderActionItem to="/list" icon="view_module" />
			</Header>
			{loading ? (
				<Loading />
			) : (
				<Switch>
					<Route path="/list" component={ConnectedList} />
					<Route path="/player" component={ConnectedPlayer} />
					<Route
						path="/person/:id"
						render={({ match }) => (
							<ConnectedPerson personId={match.params.id} />
						)}
					/>
					<Redirect to="/list" />
				</Switch>
			)}
		</>
	);
});
