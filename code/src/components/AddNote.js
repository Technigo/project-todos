import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notereminder } from 'reducers/reminders';
import { AddBtn } from './Styling/GlobalStyle'

export const AddNote = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      name: capitalizeFirstLetter(inputValue),
      isDone: false
    }
    dispatch(notereminder.actions.addNote(newNote))
    setInputValue('');
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addNoteInput">
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addNoteInput" type="text" />
        </label>
        <AddBtn type="submit">
          <i className="fa-solid fa-square-plus" />
        </AddBtn>
      </form>
    </section>
  )
}

// https://random.org for finding id thats random enough
// white space &nbsp;