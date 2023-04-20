/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { tasks } from './Reducers/tasks';

const AddTasks = () => {
  const [inputValue, setInputValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now().toString(),
      name: inputValue,
      date: startDate,
      isListed: true };
    dispatch(tasks.actions.AddTasks(newTask));
    setInputValue('');
    setClicked(true);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClicked(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [clicked]);

  return (
    <Wrapper>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addtodotask">
          <Input value={inputValue} onChange={(event) => setInputValue(event.target.value)} id="addtodotask" type="text" required />
          <StyledButton type="submit" clicked={clicked}>Add To List</StyledButton>
        </label>
        <DatePickerWrapper>
          <ReactDatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
        </DatePickerWrapper>

      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
`;

const Input = styled.input`
  height:48px;
  width:60vw;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  & button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;
const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    display: inline-block;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 26%;
  right: 0;
  transform: translateY(-50%);
  
  height:3.3rem;
  width: 10vw;
  font-family: 'Dongle', sans-serif;
  font-size: 1.5rem;
  line-height: 1rem;
  background-color: ${({ clicked }) => (clicked ? 'white' : '#DDDBCB')};
  color: black;
  border: 3px #005F6B solid;
  padding:0px 10px; 
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005F6B;
  }
`;

export default AddTasks;