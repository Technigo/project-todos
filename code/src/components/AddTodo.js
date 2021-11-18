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

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
    setInput(''); //cleares the input field after submit
  };

  return (
    <section className='add-todo'>
      <div>
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
      {/* <p>{Moment(task.time).fromNow()} </p> */}
      <p>
        {Moment(date).format('dddd')},{Moment(date).format('ll')}
      </p>
      <p>You have {items.length} tasks today</p>
    </section>
  );
};

export default AddTodo;
