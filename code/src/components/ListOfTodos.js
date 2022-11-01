/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'

const ListOfTodos = () => {
  const toDoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  return (
    <ToDoListWrapper>
      {toDoList.map((toDo) => {
        return (
          <ToDoItem>
            <input name="to-dos" type="checkbox" checked={toDo.isDone} onChange={() => onIsDoneToggle(toDo.id)} />
            <label htmlFor="to-dos"> {toDo.name} </label>
            <RemoveTask type="button">❌</RemoveTask>
          </ToDoItem>
        );
      })}
    </ToDoListWrapper>
  )
}

export default ListOfTodos

const ToDoListWrapper = styled.section`
    background-color: #f2e2c8;
    margin-top: 2vh;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #f2e2c8;
`
const ToDoItem = styled.div`
    margin: 8px;
    padding: 4px;
    background-color: rgba(246, 169, 189, 0.29);
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
`

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
        transform: scale(1.3);
    }
    `