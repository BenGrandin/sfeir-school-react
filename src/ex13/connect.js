import { connect } from 'react-redux';
import { loadPeople, savePerson } from '../utils';
import {
	getCurrent,
	getFilteredPeopleIds,
	getPeopleLoading,
	getPersonById,
	getQuery,
	getTriptych,
	SetCurrentPerson,
	SetNextPerson,
	SetPeople,
	SetPerson,
	SetPrevPerson,
	SetQuery
} from './state';

// replace async calls to loadPeople and savePerson and their
// deferred dispatch with synchronous dispatch of async
// action creators defined in ./state

export const withLoadPeople = connect(
	state => ({
		loading: getPeopleLoading(state)
	}),
	dispatch => ({
		loadPeople: () => loadPeople().then(people => dispatch(SetPeople(people)))
	})
);

export const withPersonFromPersonId = connect((state, { personId }) => ({
	person: getPersonById(state, personId)
}));

export const withPersonHandlers = connect(
	undefined,
	dispatch => ({
		onUpdate: person =>
			savePerson(person).then(person => dispatch(SetPerson(person))),
		onDisplay: personId => dispatch(SetCurrentPerson(personId))
	})
);

export const withFilteredPeopleIds = connect(
	state => ({
		people: getFilteredPeopleIds(state),
		currentId: getCurrent(state),
		query: getQuery(state)
	}),
	dispatch => ({
		setQuery: query => dispatch(SetQuery(query))
	})
);

export const withPeopleTriptych = connect(
	state => ({
		triptych: getTriptych(state)
	}),
	dispatch => ({
		onNext: () => dispatch(SetNextPerson()),
		onPrev: () => dispatch(SetPrevPerson())
	})
);
