import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
      dispatch(tasks.actions.addTask({text: value}))
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
			<button type='submit'>
				Submit
			</button>
		</form>
  )
}