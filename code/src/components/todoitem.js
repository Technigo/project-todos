import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';
import moment from 'moment';

export const ToDoItem = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  // will send info to the store on whether task is completed or not
  const handleOnChange = (event) => {
    dispatch(
      todos.actions.setCompleted({
        itemIndex: itemIndex,
        completed: !item.completed,
      })
    );
  };

  const handleShoppedItem = () => {
    dispatch(
      todos.actions.setShopped({
        itemIndex: itemIndex,
        shopped: !item.shopped,
      })
    );
  };

  console.log(item.duedate);
  if (!item.text) {
    return <></>;
  }
  if (item.text && item.shopping === true) {
    return (
      <article
        className={`todoitems 
      ${item.shopping === true ? 'toshopitem' : ''}`}
      >
        <p className='task'>
          <input
            type='checkbox'
            onChange={handleShoppedItem}
            checked={
              // (item.completed ? 'completed' : '') &&
              item.shopped ? 'shopped' : ''
            }
          ></input>
          <div className='shoppingitem'>
            {item.shopping === true ? (
              <p>Buy {item.text}</p>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        </p>
        <div className='dates'>
          <p className='dateadded'>
            added: {moment(item.createdAt).format('ll')}
          </p>
          <p className='dateadded'>due: {moment(item.duedate).format('ll')}</p>
        </div>
      </article>
    );
  }
  if (item.text && !item.shopping) {
    return (
      <article
        className={`todoitems 
      ${item.shopping === true ? 'toshopitem' : ''}`}
      >
        <p className='task'>
          <input
            type='checkbox'
            onChange={handleOnChange}
            checked={
              item.completed ? 'completed' : ''
              //item.shopped ? 'shopped' : ''
            }
          ></input>
          <div className='shoppingitem'>
            {item.shopping === true ? (
              <p>Buy {item.text}</p>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        </p>
        <div className='dates'>
          <p className='dateadded'>
            added: {moment(item.createdAt).format('ll')}
          </p>
          <p className='dateadded'>due: {moment(item.duedate).format('ll')}</p>
        </div>
      </article>
    );
  }
};
