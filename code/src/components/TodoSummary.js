import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SummaryText = styled.h2`
    font-family: 'Arial';
    align-self: center;
    font-size: 24px;
    color: #fceef5;

    @media (min-width: 667px) {
        font-size: 28px;
    }
`;

export const TodoSummary = () => {
    //Get list information from the store, for this list 
    const list = useSelector(store => store.todos.list);

    //Count the number of items that are done using filter 
    const numComplete = list.items.filter(item => item.complete).length;

    return (
        <SummaryText>
            {numComplete}/{list.items.length} tasks complete
        </SummaryText>
    );
};