import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';
import DatePicker from 'react-datepicker';

 export const StyledSection = styled.section`
  border-bottom: 3px solid white;
  min-height: 300px;
`

const StyledForm = styled.form`
	display: flex;
  flex-direction: column;

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
  background-color: #C7D3D4;
	box-shadow: none;
`;

const DateInput = styled.input`
  width: 200px;
  background-color: #C7D3D4;
  border: 1px solid black;
  height: 32px;

`


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
  const [startDate, setStartDate] = useState(new Date())
  const theWidth = useSelector((state)=>(state.size.screenSize))

	const handleNewTask = (event) => {
		event.preventDefault();
		dispatch(todoStore.actions.createTask({ task: taskInput, dueDate: startDate }));
    console.log("date",startDate)
		setTaskInput('');
	};
	//What is the smallest screen size you design for 320px
	return (
    <StyledSection>
      <SectionHeader width={theWidth}>Make a new Todo</SectionHeader>
		  <StyledForm onSubmit={handleNewTask}>
      <label for="todoInput">Write the task</label>
        <Wrapper width={theWidth}>
          <StyledInput width={theWidth} type="text" name="todoInput" onChange={ (e) => setTaskInput(e.target.value)} value={taskInput} />
      
			    <FormButton type="submit" aria-label="add">
				    +
			    </FormButton>
        </Wrapper>
        
        <label for="start">Pick a due date</label>
        <DateInput type="date" id="start" name="start" onChange={e=> setStartDate(e.target.value)}
       value={startDate}></DateInput>
  
		</StyledForm>
    </StyledSection>
	);
};

//Add a due date to a task

// () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       showTimeSelect
//       timeFormat="HH:mm"
//       timeIntervals={15}
//       timeCaption="time"
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };



