/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { TextInput, ToDoForm, FormButton } from './style/GlobalStyle';

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [showForm, setShowForm] = useState(false);
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

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleHideForm = () => {
    setShowForm(false)
  }

  return (
    <>
      {showForm && (
        <>
          <FormButton
            type="button"
            onClick={handleHideForm}>
            <FontAwesomeIcon icon={faMinus} style={{ color: '#f85f36', fontWeight: '300', fontSize: '35px' }} />
          </FormButton>
          <ToDoForm onSubmit={onFormSubmit}>
            <label htmlFor="newtask">
              <TextInput
                type="text"
                name="newtask"
                value={inputValue}
                placeholder="add todo..."
                onChange={(e) => setInputValue(e.target.value)} />
            </label>
            <div style={{
              display: 'grid', gridGap: '20px', gridTemplateColumns: 'repeat(2, 1fr)'
            }}>
              <div>
                <DatePicker
                  id="datePicker"
                  selected={dueDate}
                  onChange={(date) => setDueDate(date)}
                  placeholderText="due..."
                  dateFormat="yyyy-MM-dd" />
              </div>
              <button
                type="submit"
                className="submit-button">
                ADD TODO
              </button>
            </div>
          </ToDoForm>
        </>
      )}
      {!showForm && (
        <FormButton
          type="button"
          onClick={handleShowForm}>
          <FontAwesomeIcon icon={faPlus} style={{ color: '#f85f36', fontWeight: '300', fontSize: '35px' }} />
        </FormButton>)}
    </>
  )
}