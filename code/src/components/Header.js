import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components/macro';
import TodoCounter from './Counter';

const Header = () => {
  const dispatch = useDispatch()

  const onClearAll = () => {
    dispatch(todos.actions.clearAll())
  }

  return (
    <HeaderStyling>
      <Title>TO DO</Title>
      <div>
        <TodoCounter />
        <ClearAllBtn
          backgroundColor="#377958"
          onClick={onClearAll}>
  Clear all
        </ClearAllBtn>
      </div>
    </HeaderStyling>
  )
}

export default Header;

const HeaderStyling = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  div {
    display: flex;
    width: 100%;
    font-size: 13px;
    align-items: center;
    height: 30px;
    justify-content: center;
  }

  p {
    font-size: 13px;
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  color: #367857;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 30px;
  font-weight: 500;
`

const ClearAllBtn = styled.button`
  border: none;
  background-color: #9FDFBF;
  border-radius: 20px;
  cursor: pointer;
  color: #367857;
  font-size: 13px;
  height: 100%;
  padding: 6px 12px;
  margin-left: 5px;
`