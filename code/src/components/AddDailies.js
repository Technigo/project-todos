/* eslint-disable no-extend-native */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dailies } from 'reducers/dailies';
import './AddDailies.css'

/*
Object.defineProperty(String.prototype, 'capitalize', {
  value() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  },
  enumerable: false
}) */

const capitalize = (stringToCapitalize) => {
  return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
}

export const AddDailies = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onAddDailiesClickSubmit = (event) => {
    event.preventDefault();
    const newDailies = {
      id: Date.now().toString(),
      text: capitalize(inputValue),
      complete: false
    }
    dispatch(dailies.actions.addDailies(newDailies));
    setInputValue('');
  }
  const onAbandonDailiesButtonClick = () => {
    dispatch(dailies.actions.deleteAllDailies())
  }

  return (
    <section className="turnInSection">
      <button className="clearListBtn" type="button" onClick={onAbandonDailiesButtonClick}>Turn in all quests!</button>
      <form onSubmit={onAddDailiesClickSubmit}>
        <label htmlFor="addDailiesInput">
            Add a new quest, adventurer!
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addDailiesInput" type="text" />
        </label>
        <button type="submit">Add quest</button>
      </form>
    </section>
  )
}