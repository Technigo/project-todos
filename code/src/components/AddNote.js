import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notereminder } from 'reducers/reminders';
import { AddBtn } from './Styling/GlobalStyle';

export const AddNote = () => {
  const [inputValue, setInputValue] = useState('');
  const [charCount, setCharCount] = useState(0);
  const dispatch = useDispatch();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    setCharCount(event.target.value.length);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      todo: capitalizeFirstLetter(inputValue),
      isDone: false
    }
    dispatch(notereminder.actions.addNote(newNote))
    setInputValue('');
    setCharCount(0);
  }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addNoteInput">
          <input
            className="input-text"
            value={inputValue}
            onChange={onInputChange}
            id="addNoteInput"
            type="text"
            placeholder="Add task here..."
            maxLength={100} />
        </label>
        <AddBtn type="submit">
          <i className="fa-solid fa-square-plus" />
        </AddBtn>
      </form>
      <span>{100 - charCount} / 100 </span>
    </section>
  )
}
