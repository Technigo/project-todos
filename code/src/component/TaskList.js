import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {todos} from 'reducer/todos'

import {Item} from './Item'

const TaskListContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
`

export const TaskList = () => {
    const dispatch = useDispatch()
    const items = useSelector(store => store.todos.items)
    console.log(items)


    return (
            <TaskListContainer> 
                {items.map((item, index) => (
                    <Item key={index} item={item}></Item>
                ))}
                <button onClick={() => dispatch(todos.actions.removeAll())}>Remove All</button>
            </TaskListContainer> 
        )
}