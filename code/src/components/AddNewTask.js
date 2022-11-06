/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import plus from 'assets/plus.png';
import styled from 'styled-components';

const AddNewTask = ({ onFormSubmit, inputValue, setInputValue }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <InputDiv>
        <div className="input-div">
          <label>
            <input
              id="input-add-task"
              type="text"
              value={inputValue}
              placeholder="Add new task"
              onChange={(event) => setInputValue(event.target.value)} />
          </label>
          <AddButtonStyle>

            <button type="submit"><img src={plus} alt="add item" /></button>

          </AddButtonStyle>
        </div>
      </InputDiv>
    </form>
  )
}

export default AddNewTask;

const AddButtonStyle = styled.button`
border: none;
background: transparent;
img{
  width: 33px;
  border: none;
}

button{
  border: none;
  background: transparent;
}

`

const InputDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;

input{
  height: 25px;
}
`