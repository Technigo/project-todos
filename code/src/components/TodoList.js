/* eslint-disable jsx-a11y/label-has-associated-control */
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

  // const TimeStamp = (id) => `${String(new Date(id).getHours()).padStart(2, '0')}:${String(new Date(id).getMinutes()).padStart(2, '0')} ${new Date(id).toDateString()}`

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
                  <TodoBox>
                    <label>
                      <input
                        type="checkbox"
                        checked={todo.isChecked}
                        onChange={() => onCheckedTodoToggle(todo.id)}
                        name={`input-${todo.id}`} />
                      <p>{todo.name}</p>
                    </label>
                    <Button
                      type="button"
                      onClick={() => onRemoveTodo(index)}
                      backgroundcolor="inherit">
                      <IoCloseOutline />
                    </Button>
                  </TodoBox>

                  {/* <TimeStampStyling>{TimeStamp(todo.id)}</TimeStampStyling> */}
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
padding: 5px 0px;
display: flex;
align-items: flex-start;
flex-direction: column;
`
const TodoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  label {
    width: 100%;
  }
`

const NewTodoAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const TimeStampStyling = styled.p`
//   font-size: 13px;
//   color: #5A7869;
//   padding-left: 28px;
//   margin-top: -6px;
// `