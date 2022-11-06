import styled from 'styled-components';
import moment from 'moment';

const Header = () => {
	const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
	return (
		<HeaderStyle>
			<h1>TO DO</h1>
			<p>{currentDate}</p>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	background-color: #277bc0;
	color: whitesmoke;
	text-align: center;
	padding: 20px;
`;

export default Header;
