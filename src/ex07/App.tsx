import React, { useEffect, useState } from 'react';
import { Header } from '../solution/Header';
import { Loading } from '../solution/Loading';
import { SearchableList } from '../solution/SearchableList';
import { Player } from '../solution/Player';
import { loadPeople } from '../utils';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { PersonPage } from './Person';

export const App: React.FC = () => {
	const [people, setPeople] = useState<People>([]);
	useEffect(() => {
		loadPeople().then(setPeople);
	}, []);

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
					<Loading/> :
					<Switch>
						<Route exact path="/list" render={() => <SearchableList people={people} />} />
						<Route exact path="/player" render={() => <Player people={people} />} />
						<Route exact path="/person/:id" render={() => <PersonPage />} />
						{/*<Route path="/:user" component={User} />*/}
						<Redirect to="/list" />
					</Switch>
			}
		</>
	);
};
