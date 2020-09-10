import React, { useEffect, useMemo, useState } from 'react';
import { Fab } from '@rmwc/fab';
import { range } from '../utils';
import { PersonCard } from '../solution/PersonCard';

type CarouselProps = {
	children?: React.ReactElement[];
	prev: () => void;
	next: any;
};

const Carousel: React.FC<CarouselProps> = ({ children, prev, next }) => {
	const childArray = React.Children.toArray(children) as React.ReactElement[];
	return (
		<div className="flex-row">
			<Fab icon="skip_previous" mini onClick={prev} />
			<div className="carousel">
				{childArray}
			</div>
			<Fab icon="skip_next" mini onClick={next} />
		</div>
	);
};

type PlayerProps = {
	people: People;
};

export const Player: React.FC<PlayerProps> = ({ people }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [carouselPlaying, setCarouselPlaying] = useState(false);
	const { pred, succ } = range(0, people.length - 1);
	const [prev, next] = useMemo(() => {
		return [
			() => {
				setCurrentIndex(pred);
			},
			() => {
				setCurrentIndex(succ);
			}
		];
	}, [people]);

	// Classname should be in carousel.
	const cards: [number, string][] = [
		[succ(currentIndex), 'next'],
		[currentIndex, 'current'],
		[pred(currentIndex), 'prev']
	];

	useEffect(() => {
		if (carouselPlaying) {
			const carouselInterval = setInterval(next, 2000);
			return () => {
				//ToDo : Why can't we return clearInterval directly ?
				clearInterval(carouselInterval);
			};
		}
		// Todo : Better with dep no?
	}, [carouselPlaying]);

	const onPlayArrowClick = () => {
		setCarouselPlaying(play => !play);
	};

	return (
		<>
			<main>
				<Carousel prev={prev} next={next}>
					{cards.map(([index, className]) => {
						const person = people[index];
						return <PersonCard key={person.id} className={className} person={person} />;
					})}
				</Carousel>
			</main>
			<footer>
				<Fab icon={carouselPlaying ? 'pause' : 'play_arrow'} onClick={onPlayArrowClick} />
			</footer>
		</>
	);
};
