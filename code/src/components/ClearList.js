import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.clicked ? 'green' : '')};
  color: ${(props) => (props.clicked ? 'white' : 'black')};
  transition: all 0.2s ease-in-out;
`;

const ClearList = (item) => {
  const dispatch = useDispatch();
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setClickCount(0);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [buttonRef]);

  const handleClearAllClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
    } else {
      dispatch(tickets.actions.clearAll(item));
      setClickCount(0);
    }
  };

  return (
    <>
      <button type="button">All done</button>
      <StyledButton type="button" onClick={handleClearAllClick} clicked={clickCount > 0} ref={buttonRef}>
        {clickCount === 0 ? 'Clear All' : 'Are you sure?'}
      </StyledButton>
    </>
  );
};

export default ClearList;
