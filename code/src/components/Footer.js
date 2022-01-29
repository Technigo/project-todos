import React from 'react';
import styled from 'styled-components';

//styled components
const FooterContainer = styled.div`
	font-family: 'Reenie Beanie', cursive;
	color: white;
	font-size: 18px;
	font-weight: bold;
`;

const Link = styled.a`
	text-decoration: none;
	color: #002366;
	font-weight: 400;
	&:hover {
		text-decoration: underline;
	}
`;

//component showing the apps footer
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
