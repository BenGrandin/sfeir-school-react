import React from 'react';

export const Card: React.FC<{
	children: React.ReactNode;
	className: string;
}> = ({ children, className }) => (
	<section className={'mdc-card ' + className}>
		<div className="card-content content-type-person-info">{children}</div>
	</section>
);

// implement these subcomponents

export const CardImage: React.FC<{
	url: string;
	desc: string;
}> = ({ url, desc }) => (
	<figure>
		<img
			src={url}
			alt={desc}
		/>
	</figure>
);

export const CardHeader: React.FC<{
	title: React.ReactNode;
	subTitle: string;
}> = ({ title, subTitle }) => (
	<header>
		<h1 className="mdc-typography--headline5">
			{title}
		</h1>
		<h2 className="mdc-typography--subtitle1">{subTitle}</h2>
	</header>
);

export const CardInfo: React.FC<{
	icon: string;
	desc?: string;
	children: React.ReactNode;
}> = ({ icon, desc, children }) => (
	<p>
		<i
			className="rmwc-icon material-icons rmwc-icon--size-small"
			title={icon}
		>
			{icon}
		</i>
		&nbsp;
		{children}
	</p>
);
