import React, { useState } from 'react';
import tasks from 'reducers/taskListSlice';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid'; // https://www.npmjs.com/package/uniqid
import styled from 'styled-components';

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  console.log('inputValue', inputValue)
  const taskList = useSelector((store) => store.tasks.tasksArray);
  console.log('taskList', taskList)
  const dispatch = useDispatch();
  const onaddTask = () => {
    dispatch(tasks.actions.addTask({
      id: uniqid(),
      text: inputValue,
      isCompleted: false
    }))
  }
  return (
    <div>
      <Form onSubmit={onaddTask}>
        <Button type="submit" />
        <Input
          type="text"
          id="new task"
          name="new task"
          value={inputValue}
          required
          onChange={(event) => { setInputValue(event.target.value); }} />
      </Form>
    </div>
  )
};
export default AddTask;

const Form = styled.form`
padding: 10px;
`
const Button = styled.button`
border: solid 2px black;
padding: 10px;
`
const Input = styled.input`
border: solid 2px red;
padding: 10px;
`
