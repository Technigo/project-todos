import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { FormContainer, ButtonStyle, InputField } from '../styling/styling';

const AddTask = () => {
  const [text, setText] = useState('');
  const [id, setId] = useState(1);
  const isComplete = false;

  const allTasksArray = useSelector((store) => store.tasks.items)


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask({ id, text, isComplete }));
    setText('');
  }

  // setText to the current value in textbox
  //checks length of array of items and sets id to the next in line, if length is 0 set id to 1
  const onChangeEvent = (value) => {
    setText(value);
    setId(allTasksArray.length === 0 ? 1 : allTasksArray[allTasksArray.length-1].id + 1);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type='text'
        value={text}
        placeholder='Input task here...'
        onChange={event => onChangeEvent(event.target.value)}>  
      </InputField>
      <ButtonStyle type='submit'>Submit</ButtonStyle>
    </FormContainer>
  )
};

export default AddTask;