/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'
import { format } from 'date-fns';

export const TodoList = () => {
  const allTodos = useSelector((store) => store.todos.items)
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const now = new Date()
  const dateFormatted = format(now, "EE',' dd/MM',' h:mm a")

  return (
    <TodoListWrapper>
      {allTodos.map((singleTodo) => {
        return (
          <TodoItem key={singleTodo.id}>
            <label>
              <TodoCheckbox
                input
                name="to-do"
                id="todos"
                type="checkbox"
                checked={singleTodo.completed}
                onChange={() => onCompletedToggle(singleTodo.id)} />
            </label>
            <label htmlFor="to-dos"> {singleTodo.name} </label>
            <CreatedAt>Created: {dateFormatted}</CreatedAt>
            <RemoveTask onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))} type="button">Remove ❌</RemoveTask>
          </TodoItem>
        );
      })}
    </TodoListWrapper>
  )
}

const TodoListWrapper = styled.section`
  margin: 30px;
  background-color: rgb(236, 179, 144, 0.7);
  border-radius: 10px;
  margin-top: 50px;
  height: 60vh;
  //targets all children within the parent
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
      margin: 10px;
    }
  } 
`
const TodoItem = styled.div`
  margin: 8px;
  padding: 8px;
  background-color: #FEF5ED;
  justify-content: space-between;
  font-size: 20px;
  font-family: 'Comic Neue', cursive;

  @media (min-width: 668px){ 
    font-size: 25px;
  }
`

const TodoCheckbox = styled.input`
  margin-left: 0px;
  `

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

const CreatedAt = styled.p`
font-size:15px;
`
// onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))}
//  display: grid;
// grid-template-columns: 1fr 4fr 1fr;

// <CreatedAt>Created: {moment(date.createdAt).fromNow()}</CreatedAt>