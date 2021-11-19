import React from 'react';
import styled from "styled-components";

// styling notodos
const NotodosContainer = styled.div`
	text-align: center;
	margin: 20px auto;
	color: rgb(170, 170, 170);

	i {
		font-size: 40px;
	}
`;

const NoTodos = () => {
	return (
		<NotodosContainer>
			<p>No tasks at the moment!</p>
			<i className="fas fa-list-alt"></i>
	  </NotodosContainer>
	)
};

export default NoTodos;