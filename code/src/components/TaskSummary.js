import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TasksDone = styled.h3`
    font-size: 20px;
    font-family: 'Josefin Slab', serif;
    padding: 5px 10px;
    border-radius: 2px;
    font-weight: 400;
    margin: 10px 0;
    color: rgb(36, 90, 92);
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
`;

export const TaskSummary = () => {
    /* Accessing the global state and the initial state object list */
    const list = useSelector(state => state.tasks.list);

    /* Filtering the number of tasks that are set to done in the global state */
    const numberOfTasksDone = list.items.filter(item => item.done).length;

    return (
        <>
            <TasksDone>{numberOfTasksDone} / {list.items.length} completed</TasksDone>
        </>
    )
}
