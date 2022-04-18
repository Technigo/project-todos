import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { tasks } from 'reducers/tasks'
import { TodoDelete } from './TodoDelete'

const TodoItemParent = styled.div`
    background-color: white;

    @media (min-width: 768px) {
        margin-left: 20vw;
        margin-right: 20vw;
    }

    @media (min-width: 992px) {
        margin-left: 30vw;
        margin-right: 30vw;
    }
`
const TodoItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid grey;
`

const TodoItemSpan = styled.span`
    display: flex; 
    align-items: center;
`

const TodoItemText = styled.p`
    margin: 10px;
`

export const TodoItem = () => {
  const allTodos = useSelector((store) => store.tasks);
  const {completed} = allTodos;

  const dispatch = useDispatch();

  const onToggle = (id) => {
    dispatch(
        tasks.actions.toggleItem(id)
    )
  }

  return (
    <TodoItemParent>
    {allTodos.map((todoItem) => (
        <>
        <TodoItemDiv>
        <TodoItemSpan>
        <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(todoItem.id)}
        />
        <TodoItemText>{todoItem.text}</TodoItemText>
        </TodoItemSpan>
            <TodoDelete todoItem={todoItem}/>
        </TodoItemDiv>
        </>
    ))}
    </TodoItemParent>
  )
}
