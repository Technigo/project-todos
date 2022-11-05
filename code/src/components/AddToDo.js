import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import add from 'assets/add.png'
import { InputForm, SubmitBtn } from './StyledBtnInput'

const AddToDo = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const onAddToDo = (event) => {
    event.preventDefault();
    if (input !== '') {
      dispatch(todos.actions.addToDo(input))
      setInput('')
    } /* else {
      alert('You have to write a To Do before adding');
    } */
  };
  const onInputChange = (event) => {
    setInput(event.target.value)
  };
  return (
    <InputForm onSubmit={onAddToDo}>
      <input
        className="input-box"
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="🖊️ Add a new Task"
        required=" "
        autoComplete="off" />
      <SubmitBtn type="submit">
        <img
          className="submit-icon"
          aria-label="submit-button"
          src={add} />
      </SubmitBtn>
    </InputForm>
  )
}

export default AddToDo

// word-wrap: break-word;