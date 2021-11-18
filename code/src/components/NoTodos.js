import React from 'react';
// style and images 
import img from '../img/favicon-32x32.png';
import styled from "styled-components";

const NotodosContainer = styled.div`
	text-align: center;
	margin: 20px auto;

	img {
		width: 50px;
	}
`;

const NoTodos = () => {
	return (
		<NotodosContainer>
			<p>No tasks at the moment!</p>
			<img src={img} alt="notes-img" />
	  	</NotodosContainer>
	)
};

export default NoTodos;