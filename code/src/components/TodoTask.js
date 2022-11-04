import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import 'animate.css'

const TaskContainer = styled.div`
  min-width: 300px;
  

.animate__animated {
  margin-left: 70%;
  position: relative;
  color: white;
  background-color: black;
}

.mr-3 {
  max-width: 20px;
  flex-wrap: wrap;
  
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