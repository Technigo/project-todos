/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import todos from 'reducers/todos';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { IconContext } from 'react-icons';
import { BsCalendarDateFill } from 'react-icons/bs';
import { Form, InputField, InputBox, Label, CalenderPick } from './styles/Form.styled'
import { AddButton } from './styles/Button.styled';
import 'react-datepicker/dist/react-datepicker.css';

const NewTodo = () => {
  const [newInput, setNewInput] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const onNewTodoChange = (event) => {
    setNewInput(event.target.value)
  }

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    const creatingNewTodo = {
      id: Date.now(),
      name: newInput,
      isChecked: false,
      selectedDate
    }
    dispatch(todos.actions.addTodo(creatingNewTodo))
    setNewInput('')
    setSelectedDate('')
  }

  const IconColor = useMemo(() => ({ className: 'react-icons' }), []);

  return (
    <IconContext.Provider value={IconColor}>
      <InputBox>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="input">
            <InputField
              onChange={onNewTodoChange}
              type="text"
              placeholder="New todo"
              id="input"
              value={newInput} />
          </Label>
          <CalenderPick>
            <DatePicker
              placeholderText="pick a date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={Date.now()}
              id="dateInput" />
            <BsCalendarDateFill />
          </CalenderPick>
          <AddButton type="submit">
            ADD
          </AddButton>
        </Form>
      </InputBox>
    </IconContext.Provider>

  )
}
export default NewTodo;

