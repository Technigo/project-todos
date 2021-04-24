import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'


const DeleteButton = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #9c9c9c;
  color: #fff; 
  font-size: 22px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`

const Timestamp = styled.p`
  margin: 3px 0 0 40px;
  font-size: 10px;
  color: #767676;
`

const Checkmark = styled.input.attrs({type:'checkbox'}) `
  appearance: none;
  -webkit-appearance: none;
  height: 25px;
  width: 25px;
  background-color: #d5d5d5;
  border-radius: 5px;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background-color 0.4s;
  &:after {
    content: "";
    position: absolute;
    width: 9px;
    bottom: 10px;
    height: 14px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotateZ(40deg);
    color: #fff;
    display: none;
  }
  &:hover {
    background-color: #2faa8c;
  }
  &:checked {
    background-color: #2faa8c;
  }
  &:checked:after {
    display: block;
  }
`

const CheckboxWrapper = styled.div`
  border: 1px solid black;
  position: absolute;
  margin: auto;

`

const Checkbox = styled.label`
  color: #4c4c4c;
  font-size: 55px;
  font-weights: 600;
  cursor: pointer;
  position: relative;
`


const TodoList = () => {
  const tasks = useSelector(store => store.todos.tasks)
  console.log(tasks)

  const dispatch = useDispatch()

  return (
    <div className='todo-list'>
      {tasks.map(task => (
        <div className='task-item' key={task.id}>
          <div>
            <CheckboxWrapper>
              <Checkbox for='checkbox'></Checkbox>
              <Checkmark
                type="checkbox"
                id='checkbox'
                checked={task.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
              />
            </CheckboxWrapper>
            <span className={task.isComplete === true ? 'task-description-done' : 'task-description'} key={task.id}>{task.description}</span>
            <Timestamp>added {moment(task.createdAt).startOf('hour').fromNow()}</Timestamp>
          </div>
          <div>
            <DeleteButton
              onClick={() => dispatch(todos.actions.deleteTask(task.id))}
            >
              -
            </DeleteButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList