import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
//useDispatch will allows to call the method we are ging to update our redux store with

//Importing the reducer that contains the action we are dispatching
import todos from '../reducers/todos'


const TodoListContainer = styled.div`
border-bottom: #6C4123 1px solid;
`
const Button = styled.button`
  background-color: #ece4b7;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid #6C4123;
  border-radius: 10px;
  color: #6C4123;

`



const TodoList = () => {
//we name this variable "tasks" the same as the property in the store -line 6 in the Slice todos
//we select what we need from the store: the existing tasks  
  const tasks = useSelector((store) => store.todos.tasks)

//The instance of useDistpatch in every component is writen the same way
  const dispatch = useDispatch();
  
  return (
    <div>
      {tasks.map(todo => (
        <TodoListContainer key={todo.id}>
          
            
            <p>{todo.description}</p>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              //onChange contains the action we are going to dispatch when we check a task as complete
            />
            <Button  onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
              Delete
            </Button>
          
        </TodoListContainer>
        
      ))}
    </div>
  )
}

export default TodoList