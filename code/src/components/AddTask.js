import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';



const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type='text'
        placeholder='write your task here'
        onChange={event => setNewTask(event.target.value)}>  
      </input>
      <button onClick={() => dispatch(tasks.actions.addTask({newTask}))}>Submit</button>
    </div>
  )
};

export default AddTask;