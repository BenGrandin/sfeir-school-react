import React, { useState } from 'react';
import { TopAppBarActionItem } from '@rmwc/top-app-bar';

import { Header } from '../solution/Header';
import { Carousel } from '../ex03/Carousel';
import { PersonCard } from '../ex02/PersonCard';

type AppProps = {
	people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
	const [isCarouselView, setIsCarouselView] = useState(false);


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
				<br />
				Rewrite the Carousel so it has no dependency on PersonCard.
				<br />

				{
					isCarouselView ?
						<Carousel people={people} /> :
						people.map((p) => <PersonCard key={p.id} randomPerson={p} />)
				}
			</main>
		</>
	);
};
