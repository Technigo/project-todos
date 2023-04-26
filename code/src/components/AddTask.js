/* eslint-disable max-len */
import React, { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker, { CalendarContainer } from 'react-datepicker'
import { BsCalendarDateFill } from 'react-icons/bs';
import { tasks } from 'reducers/tasks';
import { Button } from './styles/Button';
import { IconButton } from './styles/IconButton';
import { Form, Label, AddTaskInput, AddTaskWrapper } from './styles/AddTaskStyles'
import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef(({ onClick }, ref) => (
  <IconButton onClick={onClick} ref={ref} type="button">
    <BsCalendarDateFill fill="black" />
  </IconButton>
));
// this handles the input from the calendar and shows the icon button.

export const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  // get the input using the useState hook.
  const [deadlineDate, setDeadlineDate] = useState(null);
  // get the Deadline date using the useState hook.

  const dispatch = useDispatch();
  // dispatch hook

  const onFormSubmit = (event) => {
    // this function handles stuff when the form is submitted.
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false,
      deadlineDate: deadlineDate ? new Date(deadlineDate).toLocaleDateString('sv-SE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : null
    };
    // this is an object that I call newTask that is sent into the items array (that contains all the tasks).

    dispatch(tasks.actions.addTask(newTask));
    // dispatching the addPokemon with the newPokemon as the argument
    setInputValue('');
    setDeadlineDate('');
    // We have to reset the input value back to empty for both the input and deadline date
    // https://www.random.org/
  }

  // STYLES

  return (
    <AddTaskWrapper>
      <Form onSubmit={onFormSubmit}>
        <Label htmlFor="addTaskInput">
          <AddTaskInput
            value={inputValue}
            onInput={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text"
            required />
        </Label>
        <CalendarContainer>
          <DatePicker
            selected={deadlineDate}
            onChange={(date) => setDeadlineDate(date)}
            customInput={<CustomInput />}
            id="deadlineInput"
            dateFormat="yyyy-MM-dd" />
        </CalendarContainer>
        <Button type="submit">Add task!</Button>
      </Form>
    </AddTaskWrapper>
  )
}

// in the above return the form is rendered. The datepicker is imported from react-datepicker, and the input from that is set to the deadline-variable. The calendar-container is also imported from react-datepicker.