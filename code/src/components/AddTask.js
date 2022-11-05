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
align-content: center;
background-color: var(--light-color);
padding-bottom: 10px;
border: solid 2px black;

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
justify-content: center;
width: 100%;
border: solid 2px red;
padding-bottom: 10px;

@media (min-width: 667px) and (max-width: 1024px) {

}
@media (min-width: 1025px) {

 
}
`;

const NewTaskIconWrapper = styled.div`
  border: solid 2px blue;
  margin-left: 20px;
  align-content: center;
  display: flex;

  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
  }
`;

const NewTaskIcon = styled.img`
  height: 40px;
  width: 40px;
  align-self: center;
`;
const NewTaskTextInput = styled.input`
  width: 65%;
  font-size: 13px;
  border: none;
  align-self: center;
  // padding: 5px 0 5px 15px;
  margin-top: 10px;
  height: 34px;

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 54px;
  }

  @media (min-width: 1025px) {
    font-size: 17px;
    height: 54px;
  
  }`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-content: center;
  align-self: center;
  border: solid 2px red;

.reset-button{
  height: 20px;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  color: #d0e7e2;
  margin: 0 3px;
  align-content: center;
  width: 100px;
  background-color: #005568;
  &:hover {
  background-color: #00BBBC; 
  color: whitesmoke;
}
@media (min-width: 667px) and (max-width: 1024px) {
  font-size: 13px;
  height: 20px;
}
@media (min-width: 1025px) {
  font-size: 13px;
  height: 40px;
  align-self: center;
  margin: 0 10px;

}
}
}`

/*  <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button> */