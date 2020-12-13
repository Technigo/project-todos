import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"

import { Header } from './Header.js'
import { TodoInput } from './TodoInput.js'
import { TodoItem } from './TodoItem.js'
import { TodoSummary } from './TodoSummary.js'
import { ClearButton } from './ClearButton.js'

const BackgroundContainer = styled.main`
 background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
 height: 100vh;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 flex-direction: column;
 align-items: center;
 text-align: left;
`;

const ListContainer = styled.section`
 background: #ffffff;
 border-radius: 10px;
 width: 95%;
 padding: 5px;
 opacity: 0.8;

  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const TodoList = () => {
    //Get todo list from the store
    const list = useSelector(store => store.todos.list)

  return (
    <BackgroundContainer>
      <Header />
        <TodoInput />
        <ListContainer>
          <TodoSummary />
            {list.items.map((item, index) => (
              <TodoItem 
                key={index}
                itemIndex={index}
              />
            ))}
            <ClearButton />
        </ListContainer>
    </BackgroundContainer>
  )
}