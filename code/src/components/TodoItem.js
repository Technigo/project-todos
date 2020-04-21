import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from 'moment';
import styled from 'styled-components';

export const TodoItem = ({ projectName, item, itemIndex }) => {
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
        projectName,
        itemIndex,
        done: !item.done
      })
    );
  };

  const onClickedRemoved = () => {
    dispatch(
      todos.actions.removeTodo({
        projectName,
        itemIndex
      })
    );
  };

  return (
    <div className={`todo-item ${statusStyling()}`}>
      <label>
        <input 
          type='checkbox'
          onChange={handleOnChange}
          className='todo-item-check'
          checked={item.done ? 'checked' : ''}
        ></input>
      </label>
      <span className='todo-item-description'>
        {item.description}
      </span>
      <span className='todo-item-description'>
        {item.date}
      </span>
      <span>{moment(item.createdAt).fromNow()}</span>
      <span>
        <a className='todo-item-remove' onClick={onClickedRemoved}>
        [Remove]
        </a>
      </span>
    </div>
  )
};

const TodoItemContainer = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: row;  
`
const Span = styled.span`
  padding: 20px;
`