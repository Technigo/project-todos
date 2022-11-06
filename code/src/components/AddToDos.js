import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import todos from 'reducers/todos';
import plusSign from 'assets/plusSign.png';

const AddToDos = () => {
  const [newTask, setNewTask] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  /* Prevent form from refreshing whole page when submitted */
  const onFormSubmit = (event) => {
    event.preventDefault()
  };

  /* Adding task to the store */
  const sendToDoToStore = (item) => {
    if (item.length > 0) {
      dispatch(todos.actions.addToDo(item))
    }
    setMessage('')
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      {!newTask && (
        <AddTaskWrapper>
          <AddBtn
            type="button"
            onClick={() => setNewTask(true)}>
            <img src={plusSign} alt="" />
          </AddBtn>
        </AddTaskWrapper>
      )}
      {newTask && (
        <FormWrapper>
          <Closebtn
            type="button"
            onClick={() => setNewTask(false)}>
            <p>❌</p>
          </Closebtn>

          <form onSubmit={onFormSubmit}>
            <EnterToDo
              type="text"
              placeholder="Add your task here..."
              onChange={handleMessage}
              value={message} />

            <Actionbtn
              type="submit"
              onClick={() => sendToDoToStore(message)}>
            Add New Task
            </Actionbtn>

          </form>
        </FormWrapper>
      )}
    </>
  )
}

export default AddToDos

const AddTaskWrapper = styled(Wrapper)`
  justify-content: center;
`

const FormWrapper = styled(AddTaskWrapper)`
  position: relative;  
  text-align: center;
  color: magenta;
`;

const AddBtn = styled.button`

`;

const Closebtn = styled.button`
  align-self: flex-end;
  border: 2px solid blue;
  position: absolute;

`;

const EnterToDo = styled.input`
border: 2px solid red;
  align-self: flex-start;

  
`;