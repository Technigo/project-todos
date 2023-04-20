import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers.js/todos';
import styled, { css } from 'styled-components';

export const Buttons = styled.button`
  background: transparent;
  border: solid 1px var(--primaryBlack);
  border-radius: 30px;
  color: var(--primaryBlack);
  padding: 10px 25px;
  font-size: 26px;
  cursor: pointer;
  margin: 25px 0px 0px 0px;
  transition: 0.2s;

  &:hover {
    background: var(--buttonHover);
    transition: 0.2s;
    }

    ${(styling) => styling.newtodo && css`
    
    font-size: 18px;
    background-color: #ddd97f;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      background: transparent;
      transition: 0.2s;
      }
    `
}

      ${(styling) => styling.delete && css`
      font-size: 18px;
      text-transform: capitalize;
      letter-spacing: 1px;
      margin-left:1rem;

      &:hover {
        background-color: var(--buttonHoverbeige);
        transition: 0.2s;
        }
      `
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 5%;
  padding: 2rem;
`

export const StyledForm = styled.form`
  margin-top: 2rem;
  border: 1px solid var(--primaryBlack);
  padding: 3rem 1.5rem 1rem 1.5rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`

const capitalize = (stringToCapitalise) => {
  return stringToCapitalise.charAt(0).toUpperCase() + stringToCapitalise.slice(1);
}

const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: Date.now().toString(),
      name: capitalize(inputValue),
      isDone: false
    };
    dispatch(todos.actions.addToDo(newToDo));
    setInputValue('');
    // so the user doesnt need to remove the earlier input
  }
  const onThrowToDoAwayBtnClick = () => {
    dispatch(todos.actions.deleteAllToDo());
  }
  return (
    <section>
      <Buttons type="button" onClick={onThrowToDoAwayBtnClick}> Finish this list</Buttons>
      <StyledForm onSubmit={onFormSubmit}>
        <label htmlFor="addToDoInput">
        Time to add a new task to the list and get things done
          <input placeholder="Type a task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addToDoInput" type="text" />
        </label>
        <Buttons newtodo type="submit">Add Now</Buttons>
      </StyledForm>
    </section>
  )
}

export default AddToDo;