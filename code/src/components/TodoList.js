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

  const handleDeleteAll = () => {
    dispatch(todos.actions.deleteAllTasks());
  }

  return (
    <TodoListWrapper>
      {allTodos.map((singleTodo) => {
        return (
          <TodoRow key={singleTodo.id}>
            <TodoItem>
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

              <CreatedAt>{dateFormatted}</CreatedAt>
            </TodoItem>
            <RemoveTask onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))} type="button">Remove  <span className="material-symbols-outlined"> thumb_up </span></RemoveTask>
          </TodoRow>
        );
      })}
      <DeleteAllTodos onClick={handleDeleteAll}>Remove all</DeleteAllTodos>
    </TodoListWrapper>
  )
}

const TodoItem = styled.div`

`
const TodoListWrapper = styled.section`
  margin: 30px;
  background-color: rgb(236, 179, 144, 0.7);
  border-radius: 10px;
  margin-top: 50px;
  height: 65vh;
  overflow: auto;

  //targets all children within the parent
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * {
    margin: 5px;
    }
  } 
`
const TodoRow = styled.div`
  margin: 5px;
  padding: 4px;
  background-color: #FEF5ED;
  justify-content: space-between;
  font-size: 25px;
  font-family: 'Patrick Hand', cursive;

  @media (min-width: 668px){ 
    font-size: 28px;
    margin: 8px;
    padding: 8px;
  }
`

const DeleteAllTodos = styled.button`
  border-radius: 50px;
  margin: 20px;
  padding: 7px;
  border: 0;
  font-family: 'Patrick Hand', cursive;
  font-size: 19px;
  cursor: pointer;
  background-color: #FEF5ED;
  &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
  }
`

const TodoCheckbox = styled.input`
  margin-left: 0px;
  `

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#d1570a;
    font-family: 'Comic Neue', cursive;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
`

const CreatedAt = styled.p`
  font-size:15px;
  font-family: 'Patrick Hand', cursive;

  @media (min-width: 668px){ 
    font-size: 20px;
  }
`
// onClick={() => dispatch(todos.actions.removeItem(singleTodo.id))}
//  display: grid;
// grid-template-columns: 1fr 4fr 1fr;
