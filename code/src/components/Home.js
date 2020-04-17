import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { NewTask } from './NewTask';
import { TaskList } from './TaskList';
import { todoStore } from '../reducers/todoStore';
import { sizes } from '../reducers/sizes';

const ParentContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	background-color: palegreen;
	min-height: 1000px;
`;
const MainSection = styled.section`
	width: ${(props) => props.size}px;
	margin: 16px auto;
`;

export const Home = () => {
	const dispatch = useDispatch();
	const myScreen = () => {
		dispatch(sizes.actions.changeSize(window.screen.width));
	};
	myScreen();

	const boxsize = useSelector((state) => state.sizes.screenSize.size);

	return (
		<ParentContainer>
			<MainSection size={boxsize}>
				<NewTask />
				<TaskList />
			</MainSection>
		</ParentContainer>
	);
};
