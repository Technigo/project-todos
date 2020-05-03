import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NewTask } from './NewTask';
import { TaskList } from './TaskList';
import { size } from '../reducers/sizes';
import { Header } from './Header';

//Styled components
const ParentContainer = styled.div`
	width: 100vw;
  min-height: 80vh;
	margin: 0 auto;
	background-color: #02485e;
  @media (min-width: 992px) {
    width: 992px;
  }
`;
const MainSection = styled.section`
	width: 90%;
	margin: 0 auto;
	flex: 1;
`;

export const Home = () => {

	return (
		<ParentContainer>
			<MainSection>
				<Header />
				<NewTask />
				<TaskList />
			</MainSection>
		</ParentContainer>
	);
};
