/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextInput, ToDoForm } from './style/GlobalStyle';

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now().toString(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      due: dueDate ? dueDate.toDateString() : '-',
      complete: false,
      priority: false
    };
    dispatch(tasks.actions.addItem(newToDo));
    dispatch(tasks.actions.sortItems());
    setInputValue('');
    setDueDate('');
  }

  return (
    <ToDoForm onSubmit={onFormSubmit}>
      <label htmlFor="newtask">
        <TextInput
          type="text"
          name="newtask"
          value={inputValue}
          placeholder="add todo..."
          onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <DatePicker
            id="datePicker"
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            placeholderText="Due"
            dateFormat="yyyy-MM-dd" />
        </div>
        <button
          type="submit"
          className="submit-button">
          ADD TODO
        </button>
      </div>
    </ToDoForm>
  )
}