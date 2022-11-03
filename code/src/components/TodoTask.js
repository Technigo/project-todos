import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TaskContainer = styled.div`
.marker {
  size: 25px;
}
.mr-3 {
  margin-left: 25px;
}
.btn-delete {
  background-color: red;
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
          <button onClick={handleDeleteClick} type="button" className="btn-delete">Delete</button>
        </div>
      </li>
    </TaskContainer>
  )
}

export default TodoItem;