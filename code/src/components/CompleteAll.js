import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const AllTaskButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px;
`;

const Button = styled.button`
	border: none;
	cursor: pointer;
	background-color: white;
	font-family: 'Poiret One', cursive;
	font-weight: 700;
	margin: 20px;
	border-radius: 20px;
	padding: 7px;
	&:hover {
		background-color: #d9b974;
	}
`;

const CompleteAll = () => {
	const dispatch = useDispatch();

	return (
		<AllTaskButtonWrapper>
			<Button onClick={() => dispatch(todos.actions.completeAllTasks())}>
				Complete All
			</Button>
			<Button onClick={() => dispatch(todos.actions.removeAllTasks())}>
				Remove All
			</Button>
		</AllTaskButtonWrapper>
	);
};

export default CompleteAll;
