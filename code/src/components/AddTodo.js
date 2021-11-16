import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todos from '../reducers/todos';
import { useState } from 'react';
import Moment from 'moment';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const date = Moment();
  // const date = useSelector((store) => store.todo.today);

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div className='add-todo'>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>Add todo</button>
      <p>
        {Moment(date).format('dddd')},{Moment(date).format('ll')}
      </p>
    </div>
  );
};

export default AddTodo;
