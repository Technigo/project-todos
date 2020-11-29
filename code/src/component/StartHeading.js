import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 45px 35px 0 35px;
  box-sizing: border-box;
`

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 50px 0 0 0;
`

const TodosCount = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 40px 0;
`

const AddButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    background-color: #FBC2EB;

`


export const StartHeading = ({ setAddTask }) => {
  const items = useSelector(store => store.todos.items)
  const todosCount = items.length

    return (
      <HeadingContainer>
          <Heading>Your<br/>what to do</Heading>
          <TodosCount>{todosCount} things to do</TodosCount>
          <AddButton 
            onClick={() => setAddTask(true)}
            style={{background: 'linear-gradient(120deg, #FBC2EB 0%, #ABC1EE 80%'}}
          >
            +
          </AddButton>
      </HeadingContainer>
    )
  }