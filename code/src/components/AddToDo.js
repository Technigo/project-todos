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
color: #353a47;
border: none;
padding: 8px;
font-size: 18px;
// font-family: ;

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
margin-left: 10px;
`

const AddPlus = styled.span`
  font-size: 26px;
  color: #fff;
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
        placeholder="Add your new task here"
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