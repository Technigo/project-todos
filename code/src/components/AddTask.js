import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [dueInput, setDueInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const dispatch = useDispatch();

  const categories = ['Home 🏡', 'Yard 🪓', 'Kids 👨‍👩‍👦‍👦', 'Other 🛒'];

  const onFormSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isComplete: false,
      timeStamp: now.toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Set to false to display in 24-hour format
      }),
      dueDate: dueInput,
      category: categoryInput,
      isPartOfProject: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
    setDueInput('');
    setCategoryInput('');
  };

  const handleDueInputChange = (event) => {
    setDueInput(event.target.value);
  };

  const handleCategoryInputChange = (event) => {
    setCategoryInput(event.target.value);
  };

  return (
    <AddTaskWrapper>
      <TaskForm onSubmit={onFormSubmit}>
        <Styledlabel htmlFor="addTaskInput">
          <StyledP>New Task</StyledP>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </Styledlabel>
        <Styledlabel htmlFor="dueDateInput">
          <StyledP>Due Date</StyledP>
          <input
            value={dueInput}
            onChange={handleDueInputChange}
            id="dueDateInput"
            type="datetime-local" />
        </Styledlabel>
        <Styledlabel htmlFor="categoryInput">
          <StyledP>Category</StyledP>
          <select
            value={categoryInput}
            onChange={handleCategoryInputChange}
            id="categoryInput">
            <option value="">Choose a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Styledlabel>
        <AddTaskBtn type="submit">Add Task</AddTaskBtn>
      </TaskForm>
    </AddTaskWrapper>
  );
};

const AddTaskWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    height: 10%;
    align-items: center;
`

const TaskForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const StyledP = styled.p`
  white-space: pre-wrap;
  font-weight: 700;`

const Styledlabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;`

const AddTaskBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 18px;
  background-color: #1D3153;
  color: white;`

export default AddTask;