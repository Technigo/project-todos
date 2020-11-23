import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tasks } from 'reducers/tasks';

const AddTask = () => {
  const [text, setText] = useState('');
  const [id, setId] = useState(1);
  const isComplete = false;

  const allTasksArray = useSelector((store) => store.tasks.items)


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({ id, text, isComplete }));
    setText('');
  }

  // setText to the current value in textbox
  //checks length of array of items and sets id to the next in line, if length is 0 set id to 1
  const onChangeEvent = (value) => {
    setText(value);
    setId(allTasksArray.length === 0 ? 1 : allTasksArray[allTasksArray.length-1].id + 1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        placeholder='write your task here'
        onChange={event => onChangeEvent(event.target.value)}>  
      </input>
      <button type='submit'>Submit</button>
    </form>
  )
};

export default AddTask;