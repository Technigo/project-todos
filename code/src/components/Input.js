import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/';

import { tasks } from 'reducers/tasks';

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding: 20px;
  color: #dcd7e1;
  font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const PlusSign = styled.button`
  font-size: 30px;
  font-weight: bold;
  justify-self: left;
  margin: 0;
  border: none;
  background: none;
`;

const InputText = styled.input`
  margin: 0;
  border: none;
  font-size: inherit;
`;


export const Input = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  const onItemAdd = () => {
    dispatch(tasks.actions.addItem(value));
    setValue('');
  };

  return (
    <InputContainer>
      <PlusSign
        type='submit'
        onClick={onItemAdd}
      >+</PlusSign>
      <InputText
        type='text'
        placeholder='Add task'
        value={value}
        onChange={onValueChange}
      />
    </InputContainer>
  )
}