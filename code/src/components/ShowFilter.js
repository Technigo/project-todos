import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { todo } from "../reducers/todo"

const FilterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: DeepPink;
  width: 10vw;
  height: 5vw;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; 
  color: white; // should not need this
  font-weight: bold; // should not need this
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`
const A = styled.a`
  cursor: pointer;
`
export const ShowFilter = () => {
  const categorys = useSelector((store) => store.todo.todoListItems)

  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  
  const onDoneClicked = ( ) => {
    dispatch(
      todo.actions.filterTodo({
        // filter: value,
      })
    )
  }

  return (
    <FilterSection>
      <button onClick={(event) => setFilter(event.target.value)} value='work'>
        Work
      </button>
      <button onClick={(event) => setFilter(event.target.value)} value='personal'>
        personal
      </button>
      <span>{filter}</span>
    </FilterSection>
  )
}

{/* <form handle dispatch>
  <button update filter value></button>
  <button></button>
  <button></button>
  <button></button>
</form> */}
