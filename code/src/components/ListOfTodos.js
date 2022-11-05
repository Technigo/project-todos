/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'
import { RemoveTask } from '../styles/Buttons'
import { Label, Checkboxes, CheckboxesHidden, LabelP } from '../styles/Checkboxes'
import { Urgent, LessUrgent, NotUrgent } from './UrgencyLevels'

const ListOfTodos = () => {
  const toDoList = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  // Function to toggle whether a task is done or not.
  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id))
  }
  // Function to delete a task
  const onDeleteToDoButtonClick = (index) => {
    dispatch(todos.actions.removeToDo(index))
  }

  return (
    <ToDoListWrapper>
      {toDoList.map((toDo, index) => {
        return (
          <ToDoItem>
            <Urgency>
              {toDo.urgency === 'red' && (<Urgent />)}
              {toDo.urgency === 'green' && (<NotUrgent />)}
              {toDo.urgency === 'orange' && (<LessUrgent />)}
            </Urgency>
            <Label htmlFor="to-dos"> <LabelP>{toDo.name}</LabelP>
              <CheckboxesHidden name="to-dos" type="checkbox" checked={toDo.isDone} onChange={() => onIsDoneToggle(toDo.id)} />
              <Checkboxes className={toDo.isDone ? 'done' : 'notDone'} />
            </Label>
            <RemoveTask onClick={() => onDeleteToDoButtonClick(index)} type="button">❌</RemoveTask>
          </ToDoItem>
        );
      })}
    </ToDoListWrapper>
  )
}

export default ListOfTodos

const ToDoListWrapper = styled.section`
    background-color: rgba(255,255,255, 0.8);
    margin-top: 2vh;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #f2e2c8;
    position: relative;
`
const ToDoItem = styled.div`
    margin-top: 1vh;
    margin-bottom: 1vh;
    display: grid;
    grid-template-columns: 0.1fr 3fr 0.5fr;
    border-radius: 2px;
    font-family: 'Kalam', cursive;
    color: black;
    position: relative;
`
const Urgency = styled.div`
  display: flex; 
  align-items: center;
`