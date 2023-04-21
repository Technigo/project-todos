import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';
import SubmitIcon from '../icons/SubmitIcon.png'

const StyledButton = styled.button`
height: 60px;
padding: 0;
border: none;
background: transparent;
cursor: pointer;

`

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

    <section id="addSection">
      <form onSubmit={handleNewSubmit}>
        <label htmlFor="addTODOinput">
          <input type="text" required id="addTODOinput" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </label>
        <StyledButton type="submit" aria-label="Add it">
          <img id="submitIcon" src={SubmitIcon} alt="Add todo" />
        </StyledButton>
      </form>
    </section>

  )
}

export default AddTODO;