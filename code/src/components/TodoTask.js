import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import 'animate.css'

const TaskContainer = styled.div`
  min-width: 300px;

  .test {
    border-radius: 20px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 15px;
    box-shadow: rgba(171,167,177,0.8) 0 0 10px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
}
  

.animate__animated {
  margin: 2px;
  color: white;
  background-color: black;
  border-radius: 20px;
  margin-right: 10px;
  border: 3px solid lightgrey;

  &:hover {
    background-color: red;
  }
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
        <div className="test">
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