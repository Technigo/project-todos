/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import NewTodo from './NewTodo';
import { TodoDiv, Article } from './styles/TodoList.styled';
import { FlexDiv, OuterWrapper, Innerwrapper } from './styles/Flex.styled';
import { RemoveButton } from './styles/Button.styled'
import EmptyState from '../images/EmptyState.svg'

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
                <Article key={todo.id}>
                  <TodoDiv>
                    <label>
                      <input
                        type="checkbox"
                        checked={todo.isChecked}
                        onChange={() => onCheckedTodoToggle(todo.id)}
                        name={`input-${todo.id}`} />
                      <p>{todo.name}</p>
                    </label>
                    <RemoveButton
                      type="button"
                      onClick={() => onRemoveTodo(index)}>
                      <IoCloseOutline />
                    </RemoveButton>
                  </TodoDiv>

                  {/* <TimeStampStyling>{TimeStamp(todo.id)}</TimeStampStyling> */}
                </Article>
              )
            })}
            {allTodos.length === 0
            && (
              <FlexDiv>
                <h2>You don&apos;t need to do a thing. Read a book or enjoy a fruit</h2>
                <img src={EmptyState} alt="" />
              </FlexDiv>)}
          </div>
          <FlexDiv>
            <NewTodo />
          </FlexDiv>
        </Innerwrapper>
      </OuterWrapper>
    </IconContext.Provider>

  )
}
export default TodoList;
