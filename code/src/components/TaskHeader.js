import React from 'react';
import styled from 'styled-components';

import { TaskSummary } from './TaskSummary';

const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, .8);
`;

const ToDo = styled.h1`
    font-size: 55px;
    text-align: center;
    font-family: 'Elsie', cursive;
    font-weight: 500;
    margin: 10px 0 0;
    color: rgb(36, 90, 92);
    padding: 10px;
`;

const TodaysDate = styled.p`
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    padding: 10px;
    margin: 0;
    color: rgb(255, 255, 255);
    background-color: rgb(174, 179, 149);
`;

export const TaskHeader = () => {

    const date = new Date();
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const todaysDateFormat = date.toLocaleDateString('en-GB', options);

    return (
        <Header>
            <ToDo>Things to do</ToDo>
            <TodaysDate>{todaysDateFormat}</TodaysDate>
            <TaskSummary />
        </Header>
    );
;}