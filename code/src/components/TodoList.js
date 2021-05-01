import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchData } from '../reducers/tasks'

import TodoItem from './TodoItem'
import NewTodo from './NewTodo'
import CheckAllBtn from './CheckAllBtn'
import EmptyState from './EmptyState'

//Styled components
const Section = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`

const ListInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`

const Span = styled.span`
  text-align: center;
`

const TodoList = () => {
  
  const dispatch = useDispatch()
  const items = useSelector((store) => store.tasks.items)
  const completedItems = items.filter(items => items.complete).length
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <Section>
      <NewTodo />
      {items.map(item => (
        <TodoItem 
          key={item.id}
          id={item.id}
          text={item.text}
          complete={item.complete}
          editMode={item.editMode}
          dueDate={item.dueDate}
        />
      ))}
      {items.length < 1 && (
        <EmptyState />
      )}
        
          {items.length >= 1 && (
            <ListInfo>
              <Span>{completedItems}/{items.length} tasks</Span>
              <CheckAllBtn />
            </ListInfo>
          )}
        
    </Section>
  )
}

export default TodoList