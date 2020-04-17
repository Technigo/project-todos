import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

import 'moment/locale/it';

export const ToDoInput = ({ itemsId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  // will send, dispatch, the info of new task to the store
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(
      todos.actions.addTodo({
        itemsId: itemsId,
        todoInfo: {
          text: inputValue,
          completed: false,
          duedate: selectedDay,
        },
      })
    );
    // Reset value
    setInputValue('');
  };
  const selectedDay = dueDate.toLocaleDateString();

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      ></input>
      <DayPickerInput
        selected={dueDate}
        onDayChange={setDueDate}
        formatDate={formatDate}
        parseDate={parseDate}
      />

      <input type='submit' value='Add todo'></input>
    </form>
  );
};
