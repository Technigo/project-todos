import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { SingleTodo } from "./SingleTodo"

export const TodoList = () => {

  //fetch all tasks from the store
  const tasks = useSelector(store => store.todoTasks.allTodoTasks)

  return (
    <List>
      {tasks.map((task) => (
        <SingleTodo
          key={task.id}
          id={task.id}
          text={task.text}
          complete={task.complete}
        />
      ))}
    </List>
  )
}

// --- STYLED COMPONENTS ---

const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 80%;
  

  @media (max-width: 1023px) {
    width: 80%;
  }
`
