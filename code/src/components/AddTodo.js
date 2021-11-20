import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from '../reducers/todos';
import { useState } from 'react';
import Moment from 'moment';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const date = Moment();
  const items = useSelector((store) => store.todos.items);

  const complete = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );
  const incomplete = useSelector(
    (store) => store.todos.items.filter((item) => !item.isComplete).length
  );

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
    setInput(''); //cleares the input field after submit
  };

  return (
    <>
      <section className='add-todo'>
        <div>
          <h1 className='media-h1'>TODO's</h1>
          <input
            className='todo-input'
            type='text'
            value={input}
            placeholder='new todo ---->'
            minLength='3'
            maxLength='50'
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className='add-todo-button'
            onClick={onAddTodo}
            disabled={input.length < 3 || input.length > 50}
          >
            <span className='plus'>+</span>
          </button>
        </div>
        <p className='completed'>
          Incomplete: {incomplete}
          {incomplete > !items.length && <span></span>}
          &nbsp;&nbsp; Complete: {complete}
          {complete === items.length && <span></span>}
        </p>
        <p className='moment-p'>{Moment(date).format('ll')}</p>
        <p className='week-day'>{Moment(date).format('dddd')}</p>
        <p className='task-number-text'>
          You have <span className='task-number'>{items.length}</span> tasks
          today
        </p>
      </section>
    </>
  );
};

export default AddTodo;
