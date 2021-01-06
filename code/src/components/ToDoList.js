import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ToDoItem from './ToDoItem';

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 3px;
    color: #111;
    margin-top: 10%;
`;

const ToDoList = () => {
    const items = useSelector(store => store.todos.items);
    const numItems = items.length;

    return (
        <Container>
            To be done: {numItems}
            {items.map(item => (
                <ToDoItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.created}
                    isCompleted={item.isCompleted}
                />
            ))}
        </Container>
    );
};

export default ToDoList;