import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Datepicker from 'react-date-picker';

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
      <label>
        Set a due date
        <Datepicker 
          onChange={(date) => setDueDate(date)} 
          selected={dueDate}
          value={dueDate}
          placeholderText='Click to set a due date'  
        />
      
        <span>
          <AddTaskButton type='submit'><span role="img" aria-label="Add">➕</span></AddTaskButton>
        </span>
      </label>
      
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
  width: 70vw;
  max-width: 363px;
`;

const Category = styled.label`
  font-size: 12px;
`;

const Selector = styled.select`
  margin: 0 6px 10px 0;
  font-family: Segoe UI;
  font-size: 12px;
  padding: 6px 0;
  border: none;
  border-bottom: 1px solid #869D7A;
  width: 80vw;
  max-width: 400px;
`;

const AddTaskButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  margin-left: 3px;
`;