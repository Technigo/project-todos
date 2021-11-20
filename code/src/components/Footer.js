import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
	font-family: 'Poiret One', cursive;
	color: white;
	font-size: 11px;
`;

const Link = styled.a`
	text-decoration: none;
	color: white;
	font-weight: 400;
	&:active {
		text-decoration: underline;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<p>
				{' '}
				<Link href=" https://github.com/MT-dotse">
					Made by Madelene Trang Technigo 21'
				</Link>
			</p>
		</FooterContainer>
	);
};

export default Footer;
