import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import TodoCounter from './Counter';
import { StyledHeader, StyledH1 } from './styles/Header.styled';
import { ClearAllBtn } from './styles/Button.styled'

const Header = () => {
  const dispatch = useDispatch()

  const onClearAll = () => {
    dispatch(todos.actions.clearAll())
  }

  return (
    <StyledHeader>
      <StyledH1>TO DO</StyledH1>
      <div>
        <TodoCounter />
        <ClearAllBtn
          backgroundcolor="#377958"
          onClick={onClearAll}>
          Clear all
        </ClearAllBtn>
      </div>
    </StyledHeader>
  )
}

export default Header;

