import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { todo } from "../reducers/todo"

const FilterSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: DeepPink;
  width: 12vw;
  height: 5vw;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px; 
  color: white; // should not need this
  font-weight: bold; // should not need this
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`
const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${props => props.default ? 'white' : props.work ? '#FFBB00' : props.personal ? '#7CBB00' : props.other ? '#00A1F1' : 'white'};
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: black;
`

export const ShowFilter = () => {
  const dispatch = useDispatch()

  return (
    <FilterSection>
      <A default onClick={() => dispatch(todo.actions.filterTodo({filter: '',}))}>A</A>
      <A work onClick={() => dispatch(todo.actions.filterTodo({filter: 'work',}))}>W</A>
      <A personal onClick={() => dispatch(todo.actions.filterTodo({filter: 'personal',}))}>P</A>
      <A other onClick={() => dispatch(todo.actions.filterTodo({filter: 'other',}))}>O</A>
    </FilterSection>
  )
}