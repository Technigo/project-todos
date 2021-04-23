import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import TodoItem from './TodoItem'
import NewTodo from './NewTodo'

const Section = styled.section`
  @media (min-width: 998px) {
    width: 50%;
  }
`

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <Section>
      <NewTodo />
      {items.map(item => (
        <TodoItem 
          id={item.id}
          text={item.text}
          complete={item.complete}
          created={item.created}
          editMode={item.editMode}
          dueDate={item.dueDate}
        />
      ))}
    </Section>
  )
}

export default TodoList