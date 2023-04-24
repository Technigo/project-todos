/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { format } from 'date-fns'
import { useDispatch } from 'react-redux';
import todos from 'reducers.js/todos';
import DateToday from './Date';
import { StyledForm, StyledInput, TopDiv } from './GlobalStyles';

export const Buttons = styled.button`
  background: transparent;
  border: solid 1px var(--primaryBlack);
  border-radius: 30px;
  color: var(--primaryBlack);
  padding: 10px 25px;
  font-size: 26px;
  cursor: pointer;
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
    margin: 25px 0px 0px 0px;

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

        @media (max-width:668px) {
          font-size:16px;
        }
      `
}
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
      createdAt: format(new Date(), "yyyy-MM-dd' at 'HH:mm"),
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
      <TopDiv>
        <Buttons type="button" onClick={onThrowToDoAwayBtnClick}> Finish this list</Buttons>
        <DateToday />
      </TopDiv>
      <StyledForm onSubmit={onFormSubmit}>
        <label htmlFor="addToDoInput">
        Time to add a new task to the list and get things done <br />
          <StyledInput placeholder="Type a task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addToDoInput" type="text" />
        </label>
        <Buttons newtodo type="submit">Add Now</Buttons>
      </StyledForm>
    </section>
  )
}

export default AddToDo;