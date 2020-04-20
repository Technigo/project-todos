import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from 'moment';

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  const statusStyling = () => {
    if (item.done) {
      return 'done'
    } else if (item.date > moment().format('MMMM Do YYYY')) {
      return 'over-due'
    } else {
      return ''
    }
  }

  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  const onClickedRemoved = () => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    );
  };

  return (
    <div className={`todo-item ${statusStyling()}`}>
      <input 
        type='checkbox'
        onChange={handleOnChange}
        className='todo-item-check'
        checked={item.done ? 'checked' : ''}
      ></input>
      <span className='todo-item-description'>
        {item.description}
      </span>
      <span className='todo-item-description'>
        {item.date}
      </span>
      <h3>{moment(item.createdAt).fromNow()}</h3>
      <a className='todo-item-remove' onClick={onClickedRemoved}>
        [Remove]
      </a>
    </div>
  )
};