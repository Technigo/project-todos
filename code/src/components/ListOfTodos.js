/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'
import { VscTrash } from 'react-icons/vsc';
import { SrOnly } from 'styles/GlobalStyles';
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
          <ToDoItem key={toDo.id}>
            <Urgency>
              {toDo.urgency === 'red' && (<Urgent />)}
              {toDo.urgency === 'green' && (<NotUrgent />)}
              {toDo.urgency === 'orange' && (<LessUrgent />)}
            </Urgency>
            <Label htmlFor="to-dos"><SrOnly>{toDo.name}</SrOnly>
              <CheckboxesHidden name="to-dos" type="checkbox" checked={toDo.isDone} onChange={() => onIsDoneToggle(toDo.id)} />
              <Checkboxes className={toDo.isDone ? 'done' : 'notDone'} />
            </Label>
            <LabelP>{toDo.name}</LabelP>
            <RemoveTask onClick={() => onDeleteToDoButtonClick(index)} type="button">
              <VscTrash size={20} />
            </RemoveTask>
          </ToDoItem>
        );
      })}
    </ToDoListWrapper>
  )
}

export default ListOfTodos

const ToDoListWrapper = styled.section`
    background-color: rgba(255,255,255, 0.95);
    margin-top: 2vh;
    height: 60vh;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #f2e2c8;
    position: relative;
`
const ToDoItem = styled.div`
    padding: 1vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    display: grid;
    grid-template-columns: 0.1fr 0.3fr 3fr 0.5fr;
    border-radius: 2px;
    color: black;
    position: relative;
`
const Urgency = styled.div`
  display: flex; 
  align-items: center;
`