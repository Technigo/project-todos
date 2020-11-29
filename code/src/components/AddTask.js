import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';
import Datepicker from 'react-date-picker';
import 'index.css';

import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [text, addTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState();

  const dispatch = useDispatch();

  // Categories
  const options = [
    { value: 'School:', label: 'School'},
    { value: 'Private:', label: 'Private'},
  ];

  const handleSelectChange = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask({ text, category, dueDate }))
    addTask('');
    setCategory('');
    setDueDate('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <CustomSelect 
        value={category.value}
        onChange={handleSelectChange}
        options={options}
        placeholder='Choose category'
      />
      <TaskInput
        type='text'
        value={text}
        onChange={(event) => addTask(event.target.value)}
        placeholder=' Add new task...'
      />
      <BottomWrapper>
        <Label>Due:</Label>  
        <Datepicker 
          onChange={(date) => setDueDate(date)} 
          selected={dueDate}
          value={dueDate}
          placeholderText='Click to set a due date'  
        />
        <AddButton type='submit'>Add task 
          <AddEmoji role="img" aria-label="Add emoji"> ➕</AddEmoji>
        </AddButton>
      </BottomWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
`;

const TaskInput = styled.input`
  border: none;
  border-bottom: 1px solid #869D7A;
  padding: 6px;
  margin: 6px 0 16px;
  width: 80vw;
  max-width: 400px;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
`;

const CustomSelect = styled(Select)`
  max-width: 400px:
  margin: 0 6px 10px 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-left: 3px;
`;

const Label = styled.p`
  margin-right: 6px;
`;

const AddButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;

  &:hover {
    border: 1px solid #000;
  }

  @media (max-width: 380px) {
    width: 80px;
  }
  @media (max-width: 321px) {
    width: 60px;
  }
`;

const AddEmoji = styled.span`
  font-size: 14px;
  color: #6e6e6e;
  padding: 6px;

  &:hover {
    color: #000;
  }
`;