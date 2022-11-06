import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import { OuterWrapper } from 'GlobalStyle'

// Reducers
import todo from 'reducers/todo'

// Components
import xBtn from '../assets/icon_cross.png'

import { AddTodo } from './AddTodo'
// import { TodoCounter } from './TodoCounter'
// import TaskCounter from './TaskCounter'
import { CompleteAll } from './CompleteAll'
import { DeleteAll } from './DeleteAll'

export const TodoList = () => {
  const items = useSelector((store) => store.todo.items)

  const dispatch = useDispatch();

  // -------dispatch reducers-------
  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleTodo(id))
  }

  const onDeleteTodo = (id) => {
    dispatch(todo.actions.deleteTodo(id))
  }

  // To remove an item
  // const handleDeleteTodo = ({ todos }) => {
  //   dispatch(todo.actions.deleteTodo(todos.id));
  // }

  // To show if checkbox is checked or not
  // const handleCheckboxChange = ({ todoList }) => {
  //   dispatch(tasks.actions.toggleCompleteStatus(task.id));
  // }
  return (
    <OuterWrapper>
      {/* flex-start section */}
      {' '}
      <AddTodo />
      <InnerWrapper>
        {/* <TodoCounter /> */}
        {items.map((item) => (
          <TaskContainer key={item.id}>
            <TaskContainerWrapper>
              <Wrapper>
                <input
                  type="checkbox"
                  tabIndex="0"
                  // role='checkbox'
                  name="tasks"
                  checked={item.isCompleted}
                  onChange={() => onToggleTodo(item.id)} />
                <InputText className={`${item.isCompleted ? 'completed' : ''}`}>{item.text}</InputText>
              </Wrapper>
              <ListBtn onClick={() => onDeleteTodo(item.id)}>
                <img src={xBtn} alt="delete todo" />
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

const InnerWrapper = styled.section`
  background: var(--clr-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
padding: 0.5em 1em 0;

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
  position: relative;
`;

const InputText = styled.label`
  margin: 0;
  padding-bottom: 0.05em;
  color: var(--clr-secondary);
  border-bottom: 2px solid var(--clr-accent);
  font-family: 'Imprima', 'Ubuntu', sans-serif;
  align-self: end;
  width: 225px;
  overflow-wrap: break-word;
`;
const ListBtn = styled.button`
  padding: 0.1em 0.1em 0;
  border: none;
  position: relative;
  cursor: pointer;
  background: var(--clr--main);
  align-self: end;

  @media (min-width: 667px) {
    border-bottom: 2px solid var(--clr-accent);

    &:hover {
      background: var(--clr-secondary);
      border-radius: 20%;
      transition: all 0.3s ease-in;
    }
  }
`;

const DateContainer = styled.p`
  margin: 0.25em 1.65em;
  font-size: 12px;
  color: var(--clr-gray);
`;

const ButtonWrapper = styled.div`
  align-self: flex-start;
`;
