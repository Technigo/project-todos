import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';

const StyledForm = styled.form`
	display: flex;
  flex-direction: column;
  min-height: 200px;
	align-items: flex-start;
	justify-content: space-between;
  border-bottom: 3px solid white;
`;
const Wrapper = styled.div`
  width: ${props=>props.width}px;
	display: flex;
  flex: auto;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SectionHeader = styled.h2`
  width: ${props=>props.width}px;
  color: black;
  text-align: center;
  padding: 16px 0;
`


const StyledInput = styled.input`
	width: ${props => props.width*0.8}px;
  height: ${props => (props.width<500)?60:40}px;
	border: 1px solid black;
	box-shadow: none;
`;
const FormButton = styled.button`
	box-shadow: none;
	font-size: 40px;
	color: green;
	background: none;
	border: none;
`;

export const NewTask = () => {
	const dispatch = useDispatch();
	const [ taskInput, setTaskInput ] = useState('');
  const theWidth = useSelector((state)=>(state.size.screenSize))

	const handleNewTask = (event) => {
		event.preventDefault();
		dispatch(todoStore.actions.createTask({ task: taskInput }));
		setTaskInput('');
	};
	//What is the smallest screen size you design for 320px
	return (
		<StyledForm onSubmit={handleNewTask}>
      <SectionHeader width={theWidth}>Make a new Todo</SectionHeader>
      <Wrapper width={theWidth}>
        <StyledInput width={theWidth} type="text" name="todoInput" onChange={(e) => setTaskInput(e.target.value)} value={taskInput} />
      
			<FormButton type="submit" aria-label="add">
				+
			</FormButton>
      </Wrapper>
      <label for="todoInput">Write the task</label>
      <label>
        <input type="checkbox" name="today" value="today" />
        Finish today
      </label>
		</StyledForm>
	);
};

//Add a due date to a task
