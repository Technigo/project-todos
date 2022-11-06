import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterStyle>
			<p>Made By Jessica Mo</p>
			<p>Technigo BootCamp 2022</p>
		</FooterStyle>
	);
};

const FooterStyle = styled.div`
	background-color: #7fbcd2;
	color: #083aa9;
	font-size: 0.8rem;
	text-align: center;
`;

export default Footer;
