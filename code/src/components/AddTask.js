import React, { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker, { CalendarContainer } from 'react-datepicker'
import { BsCalendarDateFill } from 'react-icons/bs';
import { tasks } from 'reducers/tasks';
import { Button } from './Button';
import { IconButton } from './styles/IconButton';
import './addtaskstyles.css';
import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef(({ onClick }, ref) => (
  <IconButton onClick={onClick} ref={ref} type="button">
    <BsCalendarDateFill fill="black" />
  </IconButton>
));

export const AddTask = () => {
  // FUNCTIONALITY
  const [inputValue, setInputValue] = useState('');
  const [deadlineDate, setDeadlineDate] = useState(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false,
      deadlineDate: deadlineDate ? new Date(deadlineDate).toLocaleDateString('sv-SE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : null
    };

    dispatch(tasks.actions.addTask(newTask));
    // dispatching the addPokemon with the newPokemon as the argument
    setInputValue('');
    setDeadlineDate('');
    // We have to reset the input value back to empty
    // https://www.random.org/
  }

  // STYLES

  return (
    <div className="AddTaskWrapper">
      <form onSubmit={onFormSubmit}>
        <label className="Label" htmlFor="addTaskInput">
          <input
            value={inputValue}
            onInput={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            required />
        </label>
        <CalendarContainer>
          <DatePicker
            selected={deadlineDate}
            onChange={(date) => setDeadlineDate(date)}
            customInput={<CustomInput />}
            id="deadlineInput"
            dateFormat="yyyy-MM-dd" />
        </CalendarContainer>
        <Button type="submit"> Add task!</Button>
      </form>
    </div>
  )
}

// Move Clear All button to the header instead?
// Fix the style for form, why doesn't the input-field go below?

// Ta reda på vad som händer här.
/* Object.defineProperty(String.prototype, 'capitalize', {
//   value: () => {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   },
//   enumerable: false
// }); */