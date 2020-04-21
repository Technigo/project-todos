import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NewTask } from './NewTask';
import { TaskList } from './TaskList';
import { size } from '../reducers/sizes';
import { Header } from './Header';

//Styled components
const ParentContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	background-color: #02485e;
	padding: 16px 0;
`;
const MainSection = styled.section`
	width: ${(props) => props.size}px;
	margin: 0 auto;
	flex: 1;
`;

export const Home = () => {
	const dispatch = useDispatch();
	const myScreen = () => {
		dispatch(size.actions.changeSize(window.screen.width)); // change size based on window-size
	};
	myScreen();

	const boxsize = useSelector((state) => state.size.screenSize); // use size from store

	return (
		<ParentContainer>
			<MainSection size={boxsize}>
				<Header />
				<NewTask />
				<TaskList />
			</MainSection>
		</ParentContainer>
	);
};
