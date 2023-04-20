import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import listIMG from '../assets/list.svg'
import calendarIMG from '../assets/calendarchecked.svg'
import categoryIMG from '../assets/tablecells.svg'
import plusIMG from '../assets/plus.svg'

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
        hour12: false // display in 24-hour format
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
          <DescriptionWrapper>
            <DescriptiveSVG alt="list" src={listIMG} />
            <StyledP>New Task</StyledP>
          </DescriptionWrapper>
          <Fieldinput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTaskInput"
            type="text" />
        </Styledlabel>
        <Styledlabel htmlFor="dueDateInput">
          <DescriptionWrapper>
            <DescriptiveSVG alt="calendar-checked" src={calendarIMG} />
            <StyledP>Due Date</StyledP>
          </DescriptionWrapper>
          <Fieldinput
            value={dueInput}
            onChange={handleDueInputChange}
            id="dueDateInput"
            type="datetime-local" />
        </Styledlabel>
        <Styledlabel htmlFor="categoryInput">
          <DescriptionWrapper>
            <DescriptiveSVG alt="category-icon" src={categoryIMG} />
            <StyledP>Category</StyledP>
          </DescriptionWrapper>
          <FieldSelect
            value={categoryInput}
            onChange={handleCategoryInputChange}
            id="categoryInput">
            <option value="">Choose a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FieldSelect>
        </Styledlabel>
        <AddTaskBtn type="submit"><PlusSVG alt="plus-icon" src={plusIMG} /> Add Task</AddTaskBtn>
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
  flex-wrap: wrap;

  @media screen and (max-width: 850px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 490px) {
    transform: scale(1);
    flex-direction: column;
  }
`;

const StyledP = styled.p`
  white-space: pre-wrap;
  font-weight: 700;
  font-size: 18px;

  @media screen and (max-width: 490px) {
    margin: 0%;
  }`

const Styledlabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 490px) {
    height: 85px;
  }
  `

const AddTaskBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 18px;
  background-color: rgb(226, 206, 172);
  display: flex;
  align-items: center;
  justify-content: space-around;
  filter: invert(1);
  font-weight: 700;
  font-size: 16px;`

const DescriptiveSVG = styled.img`
  height: 20px;`

const PlusSVG = styled.img`
  height: 20px;
  `

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`

const Fieldinput = styled.input`
height: 25px;
width: 185px;`

const FieldSelect = styled.select`
height: 28px;
width: 187px;`

export default AddTask;