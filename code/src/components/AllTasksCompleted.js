import React from 'react';

import CheckTick from '../images/checkbox-icon.png';
import { CompletedContainer, CheckTickIcon, CompletedText, Container } from '../styled-components/TasksCompleted';

export const AllTasksCompleted = () => {
    return (
        <CompletedContainer>
            <Container>
                <CheckTickIcon src={CheckTick} />
                <CompletedText>You've nothing todo! Add a new todo to get started.</CompletedText>
            </Container>
        </CompletedContainer>
    );
};