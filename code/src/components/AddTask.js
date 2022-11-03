import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';
import TodoCounter from 'components/TodoCounter';

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
    <Form onSubmit={onAddTask}>
      <Input
        id="new task"
        type="text"
        name="new task"
        value={inputValue}
        required
        onChange={(event) => { setInputValue(event.target.value); }} />
      <Button type="submit" />
      <TodoCounter />
      <button type="button" onClick={() => onRemoveAllTasks(taskList)}>Reset</button>
      {/* <button type="button" onClick={() => onSetAllTasksDone(taskList)}>All Done</button> */}

    </Form>
  );
}

export default AddTask;

const Form = styled.form`
padding: 10px;
border: solid 2px black;
display: flex;
flex-direction: row;
`
const Button = styled.button`
border: solid 2px black;
padding: 10px;
margin-left: 10px;
`
const Input = styled.input`
border: solid 2px red;
padding: 10px;
margin-left: 10px;
:focus {
  outline: none;
  border: none;
`

// const AddTaskWrapper = styled.input`
// // display: flex;
// // flex-direction-column;
// `
// const Date = styled.input`
// border: solid 2px red;
// padding: 10px;
// `