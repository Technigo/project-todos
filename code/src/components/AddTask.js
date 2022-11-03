import React, { useState } from 'react';
import taskReducer from 'reducers/todos/taskSlice';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';
import TodoCounter from 'components/TodoCounter';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  // console.log('inputValue', inputValue)
  // const taskList = useSelector((store) => store.tasks.tasksArray);
  // console.log('taskList', taskList)
  const dispatch = useDispatch();

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
    <>
      <Form onSubmit={onAddTask}>
        <Input
          id="new task"
          type="text"
          name="new task"
          value={inputValue}
          required
          onChange={(event) => { setInputValue(event.target.value); }} />
        <Button type="submit" />
      </Form>
      <TodoCounter />
    </>
  );
}

export default AddTask;

const Form = styled.form`
padding: 10px;
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
// display: flex;
// flex-direction-column;
// `
// const Date = styled.input`
// border: solid 2px red;
// padding: 10px;
// `