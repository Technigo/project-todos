import React from 'react';
import moment from 'moment';

const Header = () => {
	const date = moment().format('dddd MMMM Do YYYY');

	return <h1>{date}</h1>;
};

export default Header;
