import React, { useState } from 'react';
import { TopAppBarActionItem } from '@rmwc/top-app-bar';

import { Header } from '../solution/Header';
import { Carousel } from './Carousel';
import { PersonCard } from '../ex02/PersonCard';

type AppProps = {
	people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
	const [isCarouselView, setIsCarouselView] = useState(true);
	const personCards = people.map((p) => <PersonCard randomPerson={p} key={p.id} />);

	return (
		<>
			<Header>
				<TopAppBarActionItem icon={isCarouselView ? 'view_carousel' : 'view_module'}
									 onClick={() => {
										 setIsCarouselView(!isCarouselView);
										 // ToDo : Is it better cause of async ?
										 // setIsCarouselView(bool => !bool);
									 }} />
			</Header>

			<main>
				{
					isCarouselView ?
						<Carousel>{personCards}</Carousel> :
						personCards
				}
			</main>
		</>
	);
};
