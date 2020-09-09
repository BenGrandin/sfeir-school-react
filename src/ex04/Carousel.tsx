import React, { useMemo, useState } from 'react';
import { Fab } from '@rmwc/fab';
import { range } from '../utils';

type CarouselProps = {
	children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const arrayChildrens = React.Children.toArray(children) as React.ReactElement[];
	const [currentIndex, setCurrentIndex] = useState(0);
	const { pred, succ } = range(0, arrayChildrens.length - 1);

	const [previous, next] = useMemo(() => {
		return [pred(currentIndex), succ(currentIndex)];
	}, [currentIndex]);

	const onSkipPrevious = () => {
		setCurrentIndex(previous);
	};

	const onSkipNext = () => {
		setCurrentIndex(next);
	};

	return (
		<div className="flex-row">
			<Fab icon="skip_previous"
				 mini
				 onClick={onSkipPrevious} />

			<div className="carousel">
				{React.cloneElement(arrayChildrens[previous], { className: 'prev' })}
				{React.cloneElement(arrayChildrens[currentIndex], { className: 'current' })}
				{React.cloneElement(arrayChildrens[next], { className: 'next' })}
			</div>

			<Fab icon="skip_next"
				 mini
				 onClick={onSkipNext} />
		</div>
	);
};
