import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
//useDispatch will allows to call the method we are ging to update our redux store with

//Importing the reducer that contains the action we are dispatching
import todos from '../reducers/todos'


const TaskWrapper = styled.div`
  margin:30px 0;
  width:300px;
  border: none;
  outline:none;
  background: none;
  color: #555;
  padding:20px 10px 20px 20px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
`

const Text = styled.text`
  font-size: 18px;
  font-weight: 400;
`

const CheckboxAndButtonWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  width:180px;
`

const Button = styled.button`
  outline: none;
  border:none;
  cursor: pointer;
  width:100px;
  height: 30px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color:#fff;
  text-align: center;
  background: #24cfaa;
  box-shadow: 3px 3px 8px #b1b1b1,
              -3px -3px 8px #ffffff;
  transition: 0.5s;
  }
  &:hover {
  background:#2fdbb6;
  }
  &:active {
  background:#1da88a;
  }  
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
        <div key={todo.id}>
          <TaskWrapper>
            <Text>{todo.description}</Text>
          </TaskWrapper>
          <CheckboxAndButtonWrapper>
            <label className="checkbox-label">
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                //onChange contains the action we are going to dispatch when we check a task as complete
              />
              <span className="checkbox-custom rectangular"></span>
            </label>
            <Button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                -
            </Button>
          </CheckboxAndButtonWrapper>          
        </div>        
      ))}
    </div>
  )
}

export default TodoList