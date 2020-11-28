import React from 'react';

import { TaskSummary } from './TaskSummary';
import { ClearAllButton } from './ClearAllButton';
import { Header, ToDo, TodaysDate, DateCompletedContainer } from '../styled-components/Header';

export const TaskHeader = () => {

    const date = new Date();
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const todaysDateFormat = date.toLocaleDateString('en-GB', options);

    return (
        <Header>
            <ToDo tabIndex="0">To do</ToDo>
            <DateCompletedContainer>
                <TodaysDate tabIndex="0">{todaysDateFormat}</TodaysDate>
                <TaskSummary />
            </DateCompletedContainer>
            <ClearAllButton />
        </Header>
    );
;}