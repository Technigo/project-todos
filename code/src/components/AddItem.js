import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { todo } from '../reducers/todo'

const InputText = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background-color: DodgerBlue;

  ::placeholder {
    color: black;
  }
`

const Select = styled.select`
width: 100%;
padding: 8px 10px;
margin: 8px 0;
display: inline-block;
border: none;
border-bottom: 1px solid black;
box-sizing: border-box;
background-color: DodgerBlue;
`

const InputBtn = styled.input`
  width: 100%;
  background-color: DeepPink;
  color: white;
  font-weight: bold;
  padding: 8px 10px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: #e23290;
  }
`

export const AddItem = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [category, setCategory] = useState('Other')

  const handleSubmit = e => {
    e.preventDefault()

    const date = new Date()

    dispatch(
      todo.actions.addTodo({
        itemInfo: {
          id: Date.now(),
          description: inputValue,
          category: category,
          startDate: date.toLocaleDateString( 'se-SE', { dateStyle: 'short' }),
          dueDate: 2021
        }
      })
    )

    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Add your new item!"
      ></InputText>
  
      <Select id="category" name="category" onChange={e => setCategory(e.target.value)}>
        <option value='other' active>Other</option>
        <option value="work">Work</option>
        <option value="private">Private</option>
      </Select>

      <InputBtn
        type="submit"
        value="Add Todo"
      ></InputBtn>

    </form>
  )
}

// - Add item
// - Pick category
// - Add dueDate
// - Add priority