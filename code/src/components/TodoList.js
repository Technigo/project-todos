/* eslint-disable max-len */
import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';

import NewTodo from './NewTodo';
import { OuterWrapper, Innerwrapper, Button } from './GlobalStyles';
import Header from './Header';

const TodoList = () => {
  const allTodos = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onCheckedTodoToggle = (id) => {
    dispatch(todos.actions.toggleChecked(id))
  }

  const onRemoveTodo = (index) => {
    dispatch(todos.actions.removeTodo(index))
  }

  const TimeStamp = (id) => `${String(new Date(id).getHours()).padStart(2, '0')}:${String(new Date(id).getMinutes()).padStart(2, '0')} ${new Date(id).toDateString()}`

  const IconColor = useMemo(() => ({ color: '#367857', size: '1.2rem', className: 'react-icons' }), []);

  return (
    <IconContext.Provider value={IconColor}>
      <OuterWrapper>
        <Innerwrapper>
          <div>
            <Header />
            {allTodos.map((todo, index) => {
              return (
                <SingleTodoBox key={todo.id}>
                  <div>
                    <label htmlFor="input">
                      <Checkbox
                        type="checkbox"
                        checked={todo.isChecked}
                        onChange={() => onCheckedTodoToggle(todo.id)} />
                      {todo.name}
                      <p>created {TimeStamp(todo.id)}</p>
                    </label>
                  </div>
                  <Button
                    type="button"
                    onClick={() => onRemoveTodo(index)}
                    backgroundColor="inherit">
                    <IoCloseOutline />
                  </Button>
                </SingleTodoBox>
              )
            })}
          </div>
          <NewTodoAndBtn>
            <NewTodo />
          </NewTodoAndBtn>
        </Innerwrapper>
      </OuterWrapper>
    </IconContext.Provider>

  )
}
export default TodoList;

const SingleTodoBox = styled.article`
padding: 10px 0px;
display: flex;
justify-content: space-between;
align-items: flex-start;

p {
  font-size: 13px;
  color: #5a7869;
}
`

const NewTodoAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Checkbox = styled.input`
  margin-right: 10px;
  height: 10px;
`