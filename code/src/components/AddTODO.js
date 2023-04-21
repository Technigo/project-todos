import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';

const AddTODO = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleNewSubmit = (event) => {
    event.preventDefault(); // prevent form reload on submit
    const newTODO = {
      id: Date.now().toString(), // enough to make an ID for this purpose
      name: inputValue,
      isDone: false,
      isInVault: false,
      prioritized: false
    }
    // eslint-disable-next-line max-len
    // dispatch(slice.actions.reducer(payload)) We import the slice so that we can reference the reducer.
    dispatch(tickets.actions.addTODO(newTODO));
    setInputValue('');
  }

  return (
    <section>
      <form onSubmit={handleNewSubmit}>
        <label htmlFor="addTODOinput">
            Add a new ToDo
          <input type="text" id="addTODOinput" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Add it</button>
      </form>
    </section>
  )
}

export default AddTODO;