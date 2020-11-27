import React from 'react';

import { TaskSummary } from './TaskSummary';
import { Header, ToDo, TodaysDate } from '../styled-components/Header';

export const TaskHeader = () => {

    const date = new Date();
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const todaysDateFormat = date.toLocaleDateString('en-GB', options);

    return (
        <Header>
            <ToDo tabIndex="0">Things to do</ToDo>
            <TodaysDate tabIndex="0">{todaysDateFormat}</TodaysDate>
            <TaskSummary />
        </Header>
    );
;}