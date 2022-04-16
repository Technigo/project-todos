import React from 'react'
import { useSelector } from 'react-redux'

import { TodoDelete } from './TodoDelete'

export const TodoItem = () => {

  const allTodos = useSelector((store) => store.tasks)

  return (
    <div style={{backgroundColor: 'pink'}}>
    <p>Item to display todo item</p>
    {allTodos.map((todoItem) => (
        <>
        <p>{todoItem.text}</p>
        <TodoDelete todoItem={todoItem}/>
        </>
    ))}
    </div>
  )
}
