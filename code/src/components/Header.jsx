import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { StyledHeader } from './styled/Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const amountOfTasks = useSelector((store) => store.toDos.items.length);
  const month = new Date().toLocaleString('en', { month: 'long' });
  const date = new Date().getDate();

  const handleClearAllButtonClick = () => {
    dispatch(toDos.actions.clearAll());
  };

  const nth = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <StyledHeader>
      <div>
        <h1>Todo</h1>
        <p>{month} {date}{nth(date)}</p>
      </div>
      <div>
        <p>{amountOfTasks} tasks</p>
        <button all type="button" onClick={handleClearAllButtonClick}>
          Clear all
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;