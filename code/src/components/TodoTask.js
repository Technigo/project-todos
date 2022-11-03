import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import 'animate.css'

const TaskContainer = styled.div`
  min-width: 250px;
.list-group-item {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.animate__animated {
  margin-left: 15em;
  background-color: red;
  padding-bottom: 5px;
  padding-top: 5px;
}

`

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({ id, completed: !completed })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }))
  };

  return (
    <TaskContainer>
      <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
        <div>
          <span>
            <input
              type="checkbox"
              className="mr-3"
              checked={completed}
              onChange={handleCompleteClick} />
            {title}
          </span>
          <button onClick={handleDeleteClick} type="button" className="animate__animated animate__fadeIn">Delete</button>
        </div>
      </li>
    </TaskContainer>
  )
}

export default TodoItem;