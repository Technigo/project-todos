import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import styled from 'styled-components'

export const TodoList = () => {
    const tasks = useSelector((state) => state.todos.items)
    return (
        <Ulist>
            {tasks.map((item) => (
                <Task key={item.id} item={item} />
            ))}
        </Ulist>
    )
}
const Ulist = styled.ul`
list-style: none;
margin:0;
padding:0;
`;

