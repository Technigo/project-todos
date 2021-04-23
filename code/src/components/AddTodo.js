import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { tasks } from '../reducers/tasks';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const onSubmit = (event) => {
		event.preventDefault();


    //To prevent to add an empty task
		if (value) {
      const newTask = {
        id: Date.now(),
        text: value,
        complete: false}
      dispatch(tasks.actions.addTask(newTask))
      setValue("")
		}
	};
  return (
    <form className="form" onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
      </input>
			<button className="add-button"
        type='submit'
        disabled={value.length<2}>
        <span role="img" aria-label="Add">➕ </span>
			</button>
		</form>
  )
};

export default AddTodoForm;