import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Datepicker from 'react-date-picker';
import 'index.css';

import { tasks } from 'reducers/tasks';

export const AddTask = () => {
  const [text, addTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask({ text, category, dueDate }))
    addTask('');
    setCategory('');
    setDueDate('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>

      <Category>
        <Selector
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Choose Category</option>
          <option value='School:'>School</option>
          <option value='Private:'>Private</option>
        </Selector>
      </Category>

      <label>
        <TaskInput
          type='text'
          value={text}
          onChange={(event) => addTask(event.target.value)}
          placeholder=' Add new task...'
        />
      </label>
      <Bottom>
        <Label>Due:</Label>  
        <Datepicker 
          onChange={(date) => setDueDate(date)} 
          selected={dueDate}
          value={dueDate}
          placeholderText='Click to set a due date'  
        />
        <span>
          <AddTaskButton type='submit'><span role="img" aria-label="Add">Add task  ➕</span></AddTaskButton>
        </span>
      </Bottom>
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
  padding: 6px 0;
  margin: 6px 0 16px;
  width: 80vw;
  max-width: 400px;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
`;

const Category = styled.label`
  font-size: 14px;
`;

const Selector = styled.select`
  margin: 0 6px 10px 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  padding: 6px 0;
  border: none;
  border-bottom: 1px solid #869D7A;
  width: 80vw;
  max-width: 400px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-left: 3px;
`;

const Label = styled.p`
  margin-right: 6px;
`;

const AddTaskButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  margin-left: 3px;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;

  &:hover {
    border: 1px solid #000;
  }
`;