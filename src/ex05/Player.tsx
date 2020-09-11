import React, { cloneElement, forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { Fab } from '@rmwc/fab';
import { range } from '../utils';
import { PersonCard } from '../solution/PersonCard';
import { PeopleContext } from '../ex08/PeopleContext';

// Todo : Interface vs Type ? Heritage ?
type CarouselProps = {
	children: React.ReactElement[];
};

interface CarouselApi {
	onSkipNext: () => void;
}

const Carousel = forwardRef<CarouselApi, CarouselProps>(({ children }, ref) => {
	const childArray = React.Children.toArray(children) as React.ReactElement[];
	const [currentIndex, setCurrentIndex] = useState(0);
	const { pred, succ } = range(0, childArray.length - 1);

	const cards: [number, string][] = [
		[succ(currentIndex), 'next'],
		[currentIndex, 'current'],
		[pred(currentIndex), 'prev']
	];
	const onSkipPrevious = () => {
		setCurrentIndex(pred);
	};

	const onSkipNext = () => {
		setCurrentIndex(succ);
	};

	useImperativeHandle(ref, () => ({ onSkipNext }));
	return (
		<div className="flex-row">
			<Fab icon="skip_previous" mini onClick={onSkipPrevious} />
			<div className="carousel">
				{cards.map(([i, className]) =>
					childArray.length >= 3 && cloneElement(childArray[i], { className })
				)}
			</div>
			<Fab icon="skip_next" mini onClick={onSkipNext} />
		</div>
	);
});

type PlayerProps = {};

export const Player: React.FC<PlayerProps> = () => {
	const people = useContext(PeopleContext);
	const carouselRef = useRef<CarouselApi>();
	const onFabClick = () => {
		carouselRef.current.onSkipNext();
	};

	return (
		<>
			<main>
				<Carousel ref={carouselRef}>
					{people.map(person => (
						<PersonCard person={person} key={person.id} />
					))}
				</Carousel>
			</main>

			<footer>
				<Fab onClick={onFabClick} icon="skip_next" />
			</footer>
		</>

	);
};
