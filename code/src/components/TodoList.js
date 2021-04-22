import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ImBin2 } from 'react-icons/im'

import todos from '../reducers/todos'

const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BinButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 12px;
  background: white;
  font-size: 2rem;
`;

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)

  const dispatch = useDispatch()

  return (
    <TextContainer>
    <div>
      {tasks.map(todo => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input 
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <BinButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            <ImBin2 />
          </BinButton>
        </div>
      ))}
    </div>
    </TextContainer>
  )
}

export default TodoList