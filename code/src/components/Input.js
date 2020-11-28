import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/';

import { tasks } from 'reducers/tasks';

import add from 'assets/add.svg';

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 80px;
  align-items: center;
  padding: 20px;
  color: #dcd7e1;
  // font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const PlusSign = styled.button`
  justify-self: start;
  height: 15px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
`;

const InputText = styled.input`
  margin: 0;
  border: none;
  font-family: inherit;
  font-size: inherit;
`;

const PrioritySelect = styled.select`
  justify-self: end;
  margin: 0;
  border: none;
  font-family: inherit;
  font-size: 15px;
`;

export const Input = () => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onPriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const onItemAdd = () => {
    if (description !== '') {
      dispatch(tasks.actions.addItem({ description, priority }));
      setDescription('');
      setPriority('');
    }
  };

  return (
    <InputContainer>
      <PlusSign
        type='button'
        onClick={onItemAdd}
      >
        <img height="16" src={add} alt="Add task" />
      </PlusSign>
      <InputText
        rows='1'
        placeholder='Add task'
        required
        value={description}
        onChange={onDescriptionChange}
      />
      <PrioritySelect
        value={priority}
        onChange={onPriorityChange}
      >
        <option value=''>Priority</option>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </PrioritySelect>
    </InputContainer>
  )
}