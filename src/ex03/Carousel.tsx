import React, { FC, useState } from 'react';
import '@rmwc/fab/styles';

import { PersonCard } from '../solution/PersonCard';
import { range, toRing } from '../utils';

// cycle through the people array when clicking the previous
// and the next buttons. Look in ../utils.js for some utility
// functions you may need.

type FabProps = {
	icon: string;
	onClick?: () => void;
};

// Missing onClick ?
const Fab: React.FC<FabProps> = ({ icon, onClick }) => (
	<button className="mdc-fab mdc-fab--mini" onClick={onClick}>
		<i className="rmwc-icon material-icons mdc-fab__icon">{icon}</i>
	</button>
);

type CarouselProps = {
	people: People;
};

export const Carousel: FC<CarouselProps> = ({ people }) => {
	const [current, setCurrent] = useState(people[0]);
	const { prev, next } = toRing(people, current);


	const onSkipPrevious = () => {
		setCurrent(prev);
	};

	const onSkipNext = () => {
		setCurrent(next);
	};

	return (
		<div className="flex-row">
			<Fab icon="skip_previous" onClick={onSkipPrevious} />
			<div className="carousel">
				<PersonCard person={current} className="current" />
			</div>
			<Fab icon="skip_next" onClick={onSkipNext}/>
		</div>
	);
};

// when you are done:
// replace the local Fab with the Fab component from RMWC
// @see https://jamesmfriedman.github.io/rmwc/fabs
