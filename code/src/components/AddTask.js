import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch } from 'react-redux';
// import Checkbox from './Checkbox';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';
// import TodoCounter from 'components/TodoCounter';
import AddbuttonBig from './AddbuttonBig.svg';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  // const taskList = useSelector((store) => store.tasks.tasksArray);
  const dispatch = useDispatch();
  // const onRemoveAllTasks = () => { dispatch(taskReducer.actions.removeAllTasks(taskList)); };
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
    <NewTask>
      <TextInput
        type="text"
        name="new task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        width="60%"
        placeholder="Write a todo.."
        className="newTaskInput"
        onKeyDown={(e) => e.key === 'Enter' && onAddTask()}
        aria-label="type and hit enter to create new task." />
      <NewTaskIconWrapper
        role="button"
        onClick={onAddTask}
        tabIndex="0"
        aria-label="create new task button.">
        <NewTaskIcon src={AddbuttonBig} alt="add new task." />
      </NewTaskIconWrapper>
    </NewTask>
  );
}

export default AddTask;

const NewTask = styled.div`
padding: 5px;
margin: 7px;
display: flex;
flex-direction: row;
background-color: var(--ligth-color);
@media (min-width: 667px) and (max-width: 1024px) {
  padding: 5px;
  // margin: 10px;
}
@media (min-width: 1025px) {
  padding: 10px;
  margin: 20px;
}
`;

const NewTaskIconWrapper = styled.div`
  border: solid 4px red;
  padding: 10px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: #212429;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.7s ease-out;
  &:hover {
    transition: all 0.5s ease-in;
    transform: scale(1.1);
  }
`;

const NewTaskIcon = styled.img`
  height: 20px;
  width: 20px;
`;
const TextInput = styled.input`
  width: ${(props) => props.width};
  padding: 5px 5px 5px 20px;
  font-size: 16px;
  border: none;
  outline: none;
  :focus {
  outline: none;
  border: none;
  @media (min-width: 667px) and (max-width: 1024px) {
    // padding: 5px;

  }
  @media (min-width: 1025px) {
    // padding: 10px;
  }
`