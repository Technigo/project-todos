import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { AddCross, ListBtn, OuterWrapper } from 'GlobalStyle'

// Reducers
import todo from 'reducers/todo'

// Components
import xBtn from '../assets/icon_cross.png'
import check from '../assets/icon_check_hover.svg'
import { AddTodo } from './AddTodo'
// import { TodoCounter } from './TodoCounter'
// import TaskCounter from './TaskCounter'
import { CompleteAll } from './CompleteAll'
import { DeleteAll } from './DeleteAll'

export const TodoList = () => {
  const items = useSelector((store) => store.todo.items)
  const todosCounter = items.filter((item) => item.isCompleted === true)

  const dispatch = useDispatch();

  // -------dispatch reducers-------
  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  return (
    <OuterWrapper>
      {/* flex-start section */}
      {' '}
      <AddTodo />
      <TodoCounter>
        <h2>Completed: {todosCounter.length} / {items.length} </h2>
      </TodoCounter>
      <InnerWrapper>
        {items.map((item) => (
          <TaskContainer key={item.id}>
            <TaskContainerWrapper>
              <Wrapper>
                <input
                  type="checkbox"
                  tabIndex="0"
                  name="tasks"
                  checked={item.isCompleted}
                  onChange={() => onToggleTodo(item.id)} />
                <InputText className={`${item.isCompleted ? 'completed' : ''}`}>{item.text}</InputText>
              </Wrapper>
              <ListBtn onClick={() => onDeleteTodo(item.id)}>
                <AddCross src={xBtn} alt="delete todo" />
              </ListBtn>
            </TaskContainerWrapper>
            <div>
              <DateContainer>{item.createdAt}</DateContainer>
            </div>
          </TaskContainer>
        ))}
      </InnerWrapper>
      {items.length > 0 && (
        <ButtonWrapper>
          <CompleteAll />
          <DeleteAll />
        </ButtonWrapper>
      )}
    </OuterWrapper>
  )
}

// --------Styled components-------

const TodoCounter = styled.div`
  align-self: end;
  margin-right: 20px;
  margin-bottom: 3px;

  h2 {
    font-family: var(--font-todo);
    font-size: 1.2rem;
    color: var(--clr-darkgrey);
    padding: 0;
    margin: 0;
  }
  @media (min-width: 667px) {
    margin-right: 100px;
    }
`;

const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-grey);
  position: relative;
  width: 310px;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  /* padding: 0.5em 0 0; */

  :first-of-type {
    padding-top: 1em;
  }

  :last-of-type {
    padding-bottom: 1.5em;
  }
`;

const TaskContainerWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
 

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: var(--font-todo);
    letter-spacing: 1.5px;
    border: none;
    border-bottom: 2px solid var(--clr-accent);
    outline: none;
  }

  input:focus-visible {
    border: var(--clr-accent);
    outline: -webkit-focus-ring-color var(--clr-accent) 1px;
  }

  input[type='checkbox'] {
    align-self: center;
    /* display: inline-block; */
    border: 2px solid var(--clr-darkgrey);
    border-radius: 3px;
    height: 20px;
    width: 20px;
    position: relative;
    bottom: -0.5em; 
    right: 0.5em;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    content: '';
    background-image: url(${check});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    border: none; 
  }

  .completed {
    text-decoration: line-through;
    color: var(--clr-secondary) !important;
  }
`;

const InputText = styled.label`
  margin: 0;
  padding-bottom: 0.05em;
  color: var(--clr-secondary);
  border-bottom: 2px solid var(--clr-accent);
  font-family: var(--font-todo);
  font-size: 1.5rem;
  align-self: end;
  width: 225px;
  overflow-wrap: break-word;
`;

const DateContainer = styled.p`
  font-family: var(--font-date);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--clr-darkgrey);
  margin: 0.25em 2.3em;
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;

  @media (min-width: 667px) {
    margin-left: 75px;
    }
`;
