/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import NewTodo from './NewTodo';
import { TodoDiv, Article, TimeStampStyling } from './styles/TodoList.styled';
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

  const TimeStampHoursMinutes = (id) => `${String(new Date(id).getHours()).padStart(2, '0')}:${String(new Date(id).getMinutes()).padStart(2, '0')}`
  const TimeStamp = (id) => `${`${new Date(id).toLocaleDateString('en-us', { day: 'numeric' })} ${new Date(id).toLocaleDateString('en-us', { month: 'short' })}`}`

  const IconColor = useMemo(() => ({ color: '#367857', className: 'react-icons' }), []);

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
                    <TimeStampStyling>{TimeStamp(todo.id)} {TimeStampHoursMinutes(todo.id)}</TimeStampStyling>
                    <RemoveButton
                      type="button"
                      onClick={() => onRemoveTodo(index)}>
                      <IoCloseOutline />
                    </RemoveButton>
                  </TodoDiv>
                </Article>
              )
            })}
            {allTodos.length === 0
            && (
              <FlexDiv>
                <img src={EmptyState} alt="" />
                <h2>All done! Go outside and play!</h2>
                <p>Or create a new todo.</p>
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
