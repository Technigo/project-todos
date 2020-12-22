import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

import { Item } from 'components/Item';
import { AddTodo } from 'components/AddTodo';
import { TodoSummary } from './TodoSummary';
import { RemoveAll } from './RemoveAll';
import { EmptyState } from 'components/EmptyState';
import { RemoveCompleted } from './RemoveCompleted';

// This wraps the entire form

const ListContainer = styled.section`
    width: 280px;
    margin: 20px auto;
    padding: 20px; 
    background: #ea86b6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 667px){
        width: 500px;
    }
`;

const Header = styled.h1`
    font-family: 'Arial';
    align-self: flex-start;
    margin-left: 10px;
    font-size: 35px;
    color: #fceef5;
    padding: 0;

    @media (min-width: 667px) {
        font-size: 50px;
        margin-left: 20px;
    }
`;

const DateText = styled.span`
    font-size: 15px;
    font-style: italic;
`;

export const List = () => {
    // Get list information for this list from the store
    const list = useSelector((store) => store.todos.list);

    return (

        <ListContainer>
            <Header>Todo today
                <DateText>
                    ({moment().format("MMM Do YY")})
                </DateText>
            </Header>
            <EmptyState />
            <AddTodo />
            {list.items.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
            <RemoveAll />
            <RemoveCompleted />
            <TodoSummary />
        </ListContainer>
    );
};