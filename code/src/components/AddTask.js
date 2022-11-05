import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
// import Checkbox from './Checkbox';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';
import AddButtonBig from '../assets/AddButtonBig.svg';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const dispatch = useDispatch();
  const onRemoveAllTasks = () => { dispatch(taskReducer.actions.removeAllTasks(taskList)); };
  // const onSetAllTasksDone = () => { dispatch(taskReducer.actions.setAllTasksDone(taskList)); };
  const onAddTask = (e) => {
    e.preventDefault();

    dispatch(taskReducer.actions.addTask({
      id: uniqid(),
      text: inputValue,
      isCompleted: false,
      date: Date.now()
    }));
    setInputValue('');
  };

  return (
    <Container>
      <NewTaskWrapper>
        <NewTaskTextInput
          type="text"
          name="new task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          width="65%"
          placeholder="Write a todo.."
          className="newTaskInput"
          onKeyDown={(e) => e.key === 'Enter' && onAddTask()}
          aria-label="type and hit enter to create new task." />
        <NewTaskIconWrapper
          role="button"
          onClick={onAddTask}
          tabIndex="0"
          aria-label="create new task button."
          disabled={inputValue.length < 5 || inputValue.length > 140}>
          <NewTaskIcon src={AddButtonBig} alt="add new task." />
        </NewTaskIconWrapper>
      </NewTaskWrapper>
      <ButtonWrapper>
        <button className="reset-button" type="button" onClick={() => onRemoveAllTasks(taskList)}>Set All Done</button>
        <button className="reset-button" type="button" onClick={() => onRemoveAllTasks(taskList)}>Reset</button>
      </ButtonWrapper>
    </Container>
  );
}

export default AddTask;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: var(--light-color);
border: solid 2px black;
padding-top: 5px;

@media (min-width: 667px) and (max-width: 1024px) {
  display: flex;
flex-direction: row;

}
@media (min-width: 1025px) {
  display: flex;
flex-direction: row;

}
`

const NewTaskWrapper = styled.div`
display: flex;
flex-direction: row;
// border: solid 2px red;
padding: 10px;
display: flex;
justify-content: center;



@media (min-width: 667px) and (max-width: 1024px) {
  padding: 5px;

}
@media (min-width: 1025px) {
  padding: 20px;
 
}
`;

const NewTaskIconWrapper = styled.div`
  margin: 0 0 7px 15px;
  border-radius: 50%;
  // background-color: #212429;
  // height: 50px;
  // width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  transition: all 0.7s ease-out;
  &:hover {
    transition: all 0.5s ease-in;
    transform: scale(1.3);
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row; 
  
  }
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row; 
  }
`;

const NewTaskIcon = styled.img`
  height: 40px;
  width: 40px;
`;
const NewTaskTextInput = styled.input`
  width: ${(props) => props.width};
  padding: 7px 4px 0px 20px;
  font-size: 13px;
  border: none;
  outline: none;
  :focus {
  outline: none;
  border: solid;

  
  @media (min-width: 667px) and (max-width: 1024px) {
    // padding: 5px;

  }
  @media (min-width: 1025px) {
    // padding: 10px;
  }`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  padding: 15px 0;
  // margin-left: auto;
  // border: solid 2px red;

.reset-button{
  padding: 0 4px;
  margin: 0 4px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  border: none;
  color: #d0e7e2;
  background-color:
  padding: 8px;
width: 100px;
height: 25px;
background-color: #005568;
&:hover {
  background-color: #00BBBC; 
  color: whitesmoke;
}
}

  
@media (min-width: 667px) and (max-width: 1024px) {
  // padding: 5px;

}
@media (min-width: 1025px) {
  height: 35px;
  margin: 0 7px;


}`

/*  <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button> */