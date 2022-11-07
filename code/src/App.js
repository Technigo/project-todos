import React from 'react';
import Header from 'components /Header';
import Footer from 'components /Footer';
import AddItem from 'components /AddItem';
import List from 'components /List';

export const App = () => {
	return (
		<div>
			<Header />
			<AddItem />
			{/* <List /> */}
			<Footer />
		</div>
	);
};
