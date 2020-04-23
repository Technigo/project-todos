import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'
import { InputForm, TextInput, PostButton } from '../lib/InputForm'
import img from '../Assets/dropdown.svg'

const Dropdown = styled.select`
  background: transparent;
  margin: 0;
  line-height: 1;
  border: 0;
  padding: 0;
  border-radius: 0;
  width: 160%;
  z-index: 10; 
  font-size: 13px;
  color: black;
  @media (min-width: 1024px) {
      font-size: 16px;
  }

`
const DropdownContainer = styled.div`
  display: block;
  font-size: 13px;
  padding: 8px 35px 8px 5px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow-x: hidden;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 95% center;
`

export const AddToDo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState()
    const [categoryValue, setCategoryValue] = useState()
    const categories = useSelector((store) => store.todos.list.categories)
    const handleSumbmit = (event) => {
        event.preventDefault()
        dispatch(
            todos.actions.addTodo({ itemInfo: { description: inputValue, done: false, created: new Date(Date.now()), category: categoryValue } })
        )
        setInputValue('')
        setCategoryValue('')
    }

    return (
        <InputForm onSubmit={(event) => handleSumbmit(event)}>
            <PostButton type="submit">+</PostButton>
            <TextInput required value={inputValue} type="text" placeholder="Add task" onChange={(event) => setInputValue(event.target.value)} />
            <DropdownContainer>
                <Dropdown value={categoryValue} required onChange={(event) => setCategoryValue(event.target.value)}>
                    <option value="">Category</option>
                    {categories.map((category) => {
                        return <option value={category.name}>{category.name}</option>
                    })}
                </Dropdown>
            </DropdownContainer>
        </InputForm>
    )
}