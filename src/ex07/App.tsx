import React, { useEffect, useState } from 'react';
import { TopAppBarActionItem } from '@rmwc/top-app-bar';

import { Header } from '../solution/Header';
import { Loading } from '../solution/Loading';
import { SearchableList } from '../solution/SearchableList';
import { Player } from '../solution/Player';
import { loadPeople } from '../utils';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

export const App: React.FC = () => {
	const [showList, setShowList] = useState(true);
	const toggleView = () => setShowList(x => !x);
	const toggleIcon = showList ? 'view_carousel' : 'view_module';

	const [people, setPeople] = useState<People>([]);
	useEffect(() => {
		loadPeople().then(setPeople);
	}, []);

	const CurrentView: React.ComponentType<{ people: People }> =
		people.length === 0 ? Loading : showList ? SearchableList : Player;

	return (
		<>
			<Header>
				<NavLink
					to="/list"
					activeClassName="active"
					exact
				>
					list
				</NavLink>
				<NavLink
					to="/player"
					activeClassName="active"
					exact
				>
					player
				</NavLink>
			</Header>

			{
				people.length === 0 ?
					Loading :
					<Switch>
						<Route exact path="/list" render={() => <SearchableList people={people} />} />
						<Route exact path="/player" render={() => <Player people={people} />} />
						{/*<Route path="/:user" component={User} />*/}
						<Redirect to="/list" />
					</Switch>
			}
		</>
	);
};
