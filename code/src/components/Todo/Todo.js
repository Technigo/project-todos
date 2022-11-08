/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { FiCheck } from 'react-icons/fi'
import Checkbox from 'react-custom-checkbox';
import trashbin from '../../assets/trashbin.svg'
import { StyledTodo, DeleteBtn } from './Todo.styles'

export const Todo = ({ task }) => {
  const dispatch = useDispatch()

  const setToComplete = (taskId) => {
    dispatch(todos.actions.checkComplete({ taskId }))
  }

  const deleteTask = (taskId) => {
    dispatch(todos.actions.deletingTask({ taskId }))
  }

  return (
    <StyledTodo className={task.complete === true ? 'finished' : 'notFinished'}>
      <div id="checkText" className={task.complete === true ? 'finished' : 'notFinished'}>
        <div id="customCheck">
          <Checkbox
            name={task.text}
            type="checkbox"
            checked={task.complete}
            onChange={() => setToComplete(task.id)}
            icon={
              <div
                style={{
                  backgroundColor: '#174A41',
                  borderRadius: '50%',
                  height: '30px',
                  width: '30px'
                }}>
                <FiCheck color="white" size={30} cursor="pointer" />
              </div>
            }
            borderColor="#174A41"
            borderWidth={3}
            borderRadius={50}
            size={28} />
          <p>{task.text}</p>
        </div>
        <div className="dateTime">
          <p>Created: {task.postedTime}</p>
          <p>Due: {task.dueDate}</p>
        </div>
      </div>

      <DeleteBtn type="button" onClick={() => deleteTask(`${task.id}`)}><img src={trashbin} alt="delete" /></DeleteBtn>
    </StyledTodo>
  )
}