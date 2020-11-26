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
    font-family: 'Sacramento', cursive;
    font-weight: 500;
    margin: 10px 0 0;
    color: rgb(36, 90, 92);
    padding: 10px;
`;

export const TaskHeader = () => {

    return (
        <Header>
            <ToDo>Things to do</ToDo>
            <TaskSummary />
        </Header>
    );
;}