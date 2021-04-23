import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { ImBin2 } from 'react-icons/im'

import todos from '../reducers/todos'

const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PostIt = styled.div`
  width: 17rem;
  height: 6rem;
  background: #e8d4e3;
  margin: 2rem;
  box-shadow: 5px 5px 7px rgb(33 33 33 / 39%);
  display: flex;
  justify-content: space-between;

  [type=checkbox] {
    appearance: none;
    width: 20px;
    height: 20px;
    padding: 3px;
    background-clip: content-box;
    border: 1.5px solid #212020;
    border-radius: 2px;
    margin: 15px 0 0 15px;

    &:checked{
        background-color: #212020;
    }
  }
`

const BinButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 12px;
  background: transparent;
  font-size: 1.4rem;
  display: flex;
  align-self: flex-end;
`

const NoteText = styled.p`
  font-family: Reenie Beanie;
  font-size: 1.7rem;
  font-weight: 600;
  color: #171616;
  width: 9rem;
`

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)

  const dispatch = useDispatch()

  return (
    <ListContainer>
      {tasks.map(todo => (
        <PostIt key={todo.id}>
           <input 
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
            <NoteText>{todo.description}</NoteText>
              <BinButton onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                <ImBin2 />
              </BinButton>
        </PostIt>
      ))}
    </ListContainer>
  )
}

export default TodoList