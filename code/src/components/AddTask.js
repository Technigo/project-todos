import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
// import Checkbox from './Checkbox';
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
  const onAddTask = (e) => {
    e.preventDefault();

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
          <NewTaskIcon src={AddButton} alt="add new task." />
        </NewTaskIconWrapper>
      </NewTaskWrapper>
      <Wrapper>
        <ButtonWrapper>
          <button
            className="reset-button"
            type="button"
            onClick={() => onRemoveAllTasks(taskList)}>
            Set All Done
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
  padding-bottom: 10px;

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

const NewTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 10px;

  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
    // margin-top: 30px;
  }
`;

const NewTaskIconWrapper = styled.div`
  margin-left: 20px;
  align-content: center;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.7s ease-out;
  &:hover {
    transition: all 0.5s ease-in;
    transform: scale(1.3);

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
  padding: 5px 0 5px 15px;
  margin-top: 5px;
  height: 34px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  // :focus {

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 54px;
  }

  @media (min-width: 1025px) {
    font-size: 17px;
    height: 54px;
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
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: none;
  color: #fff;
  margin: 0 3px;
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
  // align-content: end;
  margin: 0 5px;

}
}
}`;

/*  <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button> */
