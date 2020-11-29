import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { SingleTodo } from "./SingleTodo"

export const List = () => {

  //fetch all tasks from the store
  const tasks = useSelector(store => store.todos.allTodoTasks)

  return (
    <Todos>
      {tasks.map((task) => (
        <SingleTodo
          key={task.id}
          id={task.id}
          text={task.text}
          complete={task.complete}
        />
      ))}
    </Todos>
  )
}

// --- STYLED COMPONENTS ---

const Todos = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
  
  @media (max-width: 1023px) {
    width: 80%;
  }
`
