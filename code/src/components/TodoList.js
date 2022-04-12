import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'



import {todos} from 'reducers/todos'
import { CompleatedAllTodos } from './CompleatedAllTodos'

export const TodoList = () => {

    const [isActive, setActive] = useState(false)
    const items = useSelector((store) => store.todos.items)
    const completeItems = items.filter((listItem) => listItem.isComplete)
    const numberOfCompleteItems = completeItems.length
    const todaysDate = moment().format('dddd Do MMM')


    const numberOfTodos = items.length

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    const onDeleteTodo = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return(
        <>
        <h1>Todo list</h1>
        <TodoSection>
            <CompleteContainer>
                <h1>Tasks: {numberOfTodos - numberOfCompleteItems}</h1>
                <CompleatedAllTodos />
            </CompleteContainer>

            <TaskWrapper>
            {items.map((item) => (
                    <Task key={item.id}>
                       
                        <input
                            className='checkbox'
                            type='checkbox'
                            checked={item.isComplete}
                            onChange={() => onToggleTodo(item.id)}
                        />
                        <CurrentTask>
                            <DateP className='date'>{item.date}</DateP>
                            <p className={item.isComplete ? 'complete-todo' : 'uncomplete-todo'}>
                            {item.text}
                            </p>
                        </CurrentTask>
                        
                        <button onClick={() => onDeleteTodo(item.id)}>
                        Delete
                        </button>
                    </Task>
                    ))}
            </TaskWrapper>
        </TodoSection>
        </>
    )
}

const CompleteContainer = styled.div`
    display: flex;
    margin: 50px;
    gap: 20px;
`

const Task = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
`

const CurrentTask = styled.div`
    border: 1px solid red;
    font-size: 24px;
    padding: -70px 0;
`

const DateP = styled.p`
    font-size: 12px;
`

const TaskWrapper = styled.section`
    max-height: 250px;
`
const TodoSection = styled.section`
overflow: auto;
`

