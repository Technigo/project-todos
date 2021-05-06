import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import todos from '../reducers/todos'
import TodoAllDone from './TodoAllDone'

const TaskItem = styled.div`
  box-shadow: 0 3px 4px #d6d2d2, 0 -0.5px 1px #d6d2d2;
  margin-bottom: 9px;
  padding: 10px 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HideButton = styled.button`
  padding: 7px;
  background-color: #114e60;
  color: #f4eee8;
  border: none;
  border-radius: 5px;
  margin: 0 0 5px 5px;

  &:hover {
    background-color: #19718b;
  }
`

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
  padding-bottom: 3px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #ea003a;
    cursor: pointer;
  }
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

const EmptyDivContainer = styled.div`
  background-color: #114e60;
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const EmptyDiv = styled.div`
  background-color: #f5cebe;
  padding: 10px 0;
  text-align: center;
  color: #767676;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
`

const TodoList = () => {
  const [hideMode, setHideMode] = useState(false)
  const tasks = useSelector(store => store.todos.tasks)

  const dispatch = useDispatch()

  return (
    <div className='todo-list'>
      <HideButton
        onClick={() => setHideMode(!hideMode)}
      >
        HIDE/SHOW COMPLITED
      </HideButton>
      <TodoAllDone />
      {hideMode 
        ? tasks.map(task => {
          if(!task.isComplete) {
            return(
              <TaskItem key={task.id}>
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
                <Timestamp>added {moment(task.createdAt).fromNow()}</Timestamp>
              </div>
              <div>
                <DeleteButton
                  onClick={() => dispatch(todos.actions.deleteTask(task.id))}
                >
                  -
                </DeleteButton>
              </div>
            </TaskItem>
            )
          }
      })    
        : tasks.map(task => (
            <TaskItem key={task.id}>
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
                <Timestamp>added {moment(task.createdAt).fromNow()}</Timestamp>
              </div>
              <div>
                <DeleteButton
                  onClick={() => dispatch(todos.actions.deleteTask(task.id))}
                >
                  -
                </DeleteButton>
              </div>
            </TaskItem>
        ))
        
      }
      <EmptyDivContainer>
        <EmptyDiv></EmptyDiv>
      </EmptyDivContainer>
    </div>
  )
}

export default TodoList