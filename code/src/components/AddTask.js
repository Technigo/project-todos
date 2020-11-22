import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';



const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({ text }));
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        placeholder='write your task here'
        onChange={event => setText(event.target.value)}>  
      </input>
      <button type='submit'>Submit</button>
    </form>
  )
};

export default AddTask;