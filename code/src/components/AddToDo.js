import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import todos from 'reducers/list'

const ListContainer = styled.form`
  line-height: 1em;
  padding-bottom: 10px;
`
const InputField = styled.input`
background: #fff;
border: none;
padding: 8px;
font-size: 18px;
// font-family: ;
border-bottom: 2px dashed;
:focus {
  outline: none;
}
`

const AddButton = styled.button`
font-family: ;
font-size: 18px;
border: none;
background: transparent;
cursor: pointer;
`

const AddPlus = styled.span`
  font-size: 28px;
`

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  // const todos = useSelector((store) => store.todos)

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: uniqid(),
      key: todos.id,
      name: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addItem(newTodo))
    setInputValue('');
  }
  return (
    <ListContainer onSubmit={onFormSubmit}>
      <InputField
        type="text"
        placeholder="Type here..."
        value={inputValue}
        required
        onChange={(e) => setInputValue(e.target.value)} />
      <AddButton type="submit" disabled={inputValue.length > 100}>
        <AddPlus role="img" aria-label="plus sign emoji">✚</AddPlus>
      </AddButton>
    </ListContainer>
  )
};

export default AddTodo;