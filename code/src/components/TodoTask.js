import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

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
  )
}

export default TodoItem;