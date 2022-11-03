import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

const AddTask = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      tasks.actions.addTask({
        text: inputText,
        isComplete: false
      })
    );

    setInputText('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <button type="submit" className="add-btn">
        <i className="eraser" />
      </button>
      <input
        className="styledInput"
        type="text"
        placeholder="Add a Task..."
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        required />
    </StyledForm>
  );
};

const StyledForm = styled.form`
list-style:none;
text-decoration:none;
color:#000;
background:#cfc;
display:block;
height:10em;
width:10em;
padding:1em;
margin:1em;
box-shadow: 7px 7px 9px rgba(33,33,33,.7);
transform: rotate(6deg);
transition: transform .15s linear;

&:hover {
  box-shadow:10px 10px 7px rgba(0,0,0,.7);
  transform: scale(1.15);
  position:relative;
  z-index:5;    
}

@media (min-width: 900px) {
  height:20em;
  width:20em;
  width: ;
}
`;

export default AddTask;