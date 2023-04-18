import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uncompleted from 'reducers/uncompleted';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(Date.now().toString())
    const newTask = {
      id: Date.now().toString(),
      text: inputValue,
      isCompleted: false
    }
    console.log(newTask)
    dispatch(uncompleted.actions.addTask(newTask))
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="add">Add note
          <input
            onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Add note</button>
      </form>
    </section>
  )
}