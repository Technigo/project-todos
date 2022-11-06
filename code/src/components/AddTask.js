import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';
import TodoCounter from 'components/TodoCounter';
import AddButton from '../assets/AddButton.svg';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const dispatch = useDispatch();
  const onRemoveAllTasks = () => {
    dispatch(taskReducer.actions.removeAllTasks(taskList));
  };
  // const onSetAllTasksDone = () => { dispatch(taskReducer.actions.setAllTasksDone(taskList)); };
  const onAddTask = (event) => {
    event.preventDefault();

    dispatch(
      taskReducer.actions.addTask({
        id: uniqid(),
        text: inputValue,
        isCompleted: false,
        date: Date.now()
      })
    );
    setInputValue('');
  };

  return (
    <Container>
      <NewTaskWrapper onSubmit={onAddTask}>
        <NewTaskTextInput
          type="text"
          name="new task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Write a todo.."
          className="newTaskInput"
          aria-label="Type and hit enter to create new task." />
        <NewTaskIconWrapper
          type="submit"
          aria-label="Create new task button.">
          <NewTaskIcon src={AddButton} alt="Add new task." />
        </NewTaskIconWrapper>
      </NewTaskWrapper>
      <Wrapper>
        <ButtonWrapper>
          <button
            className="reset-button"
            type="button"
            onClick={() => onRemoveAllTasks(taskList)}>
            All Done
          </button>
          <button
            className="reset-button"
            type="button"
            onClick={() => onRemoveAllTasks(taskList)}>
            Reset
          </button>
        </ButtonWrapper>
        <TodoCounter />
      </Wrapper>
    </Container>
  );
};

export default AddTask;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: var(--light-color);
 

  @media (min-width: 667px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
    align-items: center;
  }
`;

const NewTaskWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
 
  }
`;

const NewTaskIconWrapper = styled.button`
  border: none;
  background: none;
  margin-left: 15px;
  align-content: center;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-in;
    transform: scale(1.3);

  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
  }
`;

const NewTaskIcon = styled.img`
  height: 30px;
  width: 30px;
  align-self: center;
  @media (min-width: 667px) and (max-width: 1024px) {
    height: 40px;
    width: 40px;
  }
  @media (min-width: 1025px) {
      height: 40px;
  width: 40px;
  }
`;

const NewTaskTextInput = styled.input`
  width: 70%;
  font-size: 13px;
  border: none;
  align-self: center;
  padding: 3px 0 3px 10px;
  margin-left: 8px;
  height: 30px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  // :focus {

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 54px;
    width: 65%;
  }

  @media (min-width: 1025px) {
    font-size: 17px;
    height: 54px;
    width: 65%;
    padding: 5px 0 5px 15px;

  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 25px 0 0 0;

  @media (min-width: 667px) and (max-width: 1024px) {
   
  }
  @media (min-width: 1025px) {
  margin: 53px 40px 0 0;
}

.reset-button{
  height: 25px;
  font-size: 11px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  color: #fff;
  letter-spacing: 1px;
  margin: 0 5px;
  align-content: center;
  width: 100px;
  background-color: #005568;
  &:hover {
  background-color: #00BBBC; 
  
}
@media (min-width: 667px) and (max-width: 1024px) {
  font-size: 13px;
  height: 30px;
}
@media (min-width: 1025px) {
  font-size: 13px;
  height: 40px;
 margin: 11px 10px 0 0px;



}
}
}`;

/*  <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button> */
