import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {todoStore} from '../reducers/todoStore'
import { StyledSection, SectionHeader } from '../shared/shared';
import { TaskItem } from './TaskItem'


// Styled components
const StyledGrid = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
  @media (min-width: 576px){
    flex-direction: row;
  }
`;
const ClearButton = styled.button`
	background-color: black;
	color: white;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	box-shadow: 1px 1px 2px #222;
	margin: 16px 0;
`;

export const TaskList = () => {
	const allTasks = useSelector((state) => state.todoStore.todos);
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(todoStore.actions.clearAll());
	};

	return (
		<StyledSection>
			<SectionHeader>Todo List</SectionHeader>
			<StyledGrid>{allTasks.map((task) => <TaskItem todo={task} />)}</StyledGrid>
			<ClearButton onClick={handleClear}>clear</ClearButton>
		</StyledSection>
	);
};
