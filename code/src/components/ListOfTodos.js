/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'
// import DeleteTask from 'components/DeleteTask'
import DeleteAllTasks from './DeleteAllTasks';
import { RemoveTask } from '../styles/Buttons'
// import Urgent from './Urgent';

const ListOfTodos = () => {
  const toDoList = useSelector((store) => store.todos.items)
  // const levelOfUrgency = useSelector((store) => store.todos.items.urgency)
  const dispatch = useDispatch()

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }

  const onDeleteToDoButtonClick = (index) => {
    dispatch(todos.actions.removeToDo(index))
  }

  return (
    <ToDoListWrapper>
      {toDoList.map((toDo, index) => {
        return (
          <ToDoItem>
            {toDo.urgency === 'red' && ('🔴')}
            {toDo.urgency === 'green' && ('🟢')}
            {toDo.urgency === 'orange' && ('🟠')}
            <input name="to-dos" type="checkbox" checked={toDo.isDone} onChange={() => onIsDoneToggle(toDo.id)} />
            <label htmlFor="to-dos"> {toDo.name} </label>
            <RemoveTask onClick={() => onDeleteToDoButtonClick(index)} type="button">❌</RemoveTask>
          </ToDoItem>
        );
      })}
      <DeleteAllTasks />
    </ToDoListWrapper>
  )
}

export default ListOfTodos

const ToDoListWrapper = styled.section`
    background-color: #ffecea;
    margin-top: 2vh;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #f2e2c8;
    position: relative;
`
const ToDoItem = styled.div`
    margin: 1vh 5vw 1vh 5vw;
    padding: 4px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 3fr 1fr;
    border-radius: 2px;
    font-family: 'Kalam', cursive;;
`