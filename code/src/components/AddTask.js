import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import { todos } from 'reducers/todos';
import plusSign from 'assets/plusSign.png';

export const AddTask = () => {
  const [newTask, setNewTask] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  // Preventing the form from refreshing whole page when submitted
  const onFormSubmit = (event) => {
    event.preventDefault()
  };

  // Adding task to the store
  const sendTaskToStore = (item) => {
    if (item.length > 0) {
      dispatch(todos.actions.addToDo(item))
    }
    setMessage('')
  };

  // Storing user's text msg
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      {!newTask && (
        <AddMsgWrapper>
          <AddBtn
            type="button"
            onClick={() => setNewTask(true)}>
            <img src={plusSign} alt="" />
          </AddBtn>
        </AddMsgWrapper>
      )}

      {newTask && (
        <FormWrapper>
          <Closebtn
            type="button"
            onClick={() => setNewTask(false)}>
            <Cross>X</Cross>
          </Closebtn>

          <form onSubmit={onFormSubmit}>
            <EnterToDo
              type="text"
              onChange={handleChange}
              value={message} />
            <Actionbtn
              align="flex-start"
              color="#1F9D6E"
              type="submit"
              onClick={() => sendTaskToStore(message)}>
            Add task
            </Actionbtn>
          </form>
        </FormWrapper>
      )}

    </>

  )
}

const AddMsgWrapper = styled(Wrapper)`


`;

const FormWrapper = styled(Wrapper)`

`;

const AddBtn = styled.button`
 border: transparent;
 background-color: transparent;
 cursor: pointer;
`;

const Closebtn = styled.button`

`;

const Cross = styled.span`

`;

const EnterToDo = styled.input`


`;

