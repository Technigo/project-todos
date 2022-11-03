import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { StyledHeader } from './styled/Header.styled';
import { StyledButton } from './styled/Button.styled';

const Header = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((store) => store.toDos.items);
  const month = new Date().toLocaleString('en', { month: 'long' });
  const date = new Date().getDate();

  const handleClearAllButtonClick = () => {
    dispatch(toDos.actions.clearAll());
  };

  return (
    <StyledHeader>
      <div>
        <h1>Todo</h1>
        <p>{month} {date}</p>
      </div>
      <div>
        <p>{taskList.length} tasks</p>
        <StyledButton all type="button" onClick={handleClearAllButtonClick}>
          Clear all
        </StyledButton>
      </div>
    </StyledHeader>
  );
};

export default Header;