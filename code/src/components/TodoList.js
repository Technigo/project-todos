import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'


const TodoList = () => {

const TodoInfo = useSelector((store) => store.todo)


  return (
    

<article className="todosListContainer">
  
{TodoInfo.map((todos) =>

 

<TodoItem key={todos.id} todos={todos} />

 
)}
</article> 

    
  )
}

export default TodoList
