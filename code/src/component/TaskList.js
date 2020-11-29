import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {todos} from 'reducer/todos'

import {Item} from './Item'
import { NoTask } from 'component/NoTask'
import { TaskForm } from 'component/TaskForm'

const TaskListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 35px;
    box-sizing: border-box;
`

const ClearAllButton = styled.button`
    width: 140px;
    height: 40px;
    border-radius: 20px;
    background-color: #2D2D2C;
    border: none;  
    color: #fff;
    font-size: 16px;
    font-weight: 600;
`

export const TaskList = ({addTask}) => {
    const dispatch = useDispatch()
    const items = useSelector(store => store.todos.items)
    const todosCount = items.length

    // if(addTask || !todosCount) 
    // return <TaskForm />

    if (todosCount) 
    return (
        <>
            <TaskForm />
            <TaskListContainer> 
                {items.map((item, index) => (
                    <Item key={index} item={item}></Item>  
                ))}
                <ClearAllButton onClick={() => dispatch(todos.actions.removeAll())}>Clear All</ClearAllButton>

            </TaskListContainer> 
        </>
        )
    
        

    return (
        <NoTask />
    )
}