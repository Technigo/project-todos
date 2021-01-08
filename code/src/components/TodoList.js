import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Todo } from 'components/Todo'
import { Select } from 'library/Select'
import { ClearButton } from 'components/ClearButton'
import { CompleteAllButton } from 'components/CompleteAllButton'
import logo from '../assets/bored-cat.gif'

export const TodoList = () => {
  const [category, setCategory] = useState('')

  const items = useSelector((store) => {
    if (!category) return store.todos.items //if no category chosen, show all items in list
    else return store.todos.items.filter(item => item.category === category) // else filter the list on category choosen
  })
  
  if (items.length === 0) {
    return (
      <ListWrapper>
        <CatGif src={logo} alt='bored cat' />
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      {/* Note to self: How to make it so that only choosen categories show? */}
      <label>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Filter by category:</option>
          <option value='Work'>Work</option>
          <option value='Study'>Study</option>
          <option value='Household'>Household</option>
          <option value='Shopping'>Shopping</option>
          <option value='Fun'>Fun</option>
          <option value='Other'>Other</option>
        </Select>
      </label>
      <ToDoList>
        {items.map((item) => (
          <Todo key={item.id} item={item} />
        )).reverse()}
      </ToDoList>
      {items.length > 0 &&
      <>
      <ClearButton />
      <CompleteAllButton />
      </>
      } 
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  width: 85vw;
  max-width: 1000px;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(3, 77, 136, .4);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-top: 3vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`
const ToDoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 95%;
  max-width: 500px;
`;

const CatGif = styled.img`
  width: 200px;
`;