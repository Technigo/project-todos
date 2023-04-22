/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';
import { ClearButtons } from './buttons';

const ClearList = () => {
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
      dispatch(tickets.actions.clearAll());
      setClickCount(0);
    }
  };

  const handleAllDoneClick = () => {
    dispatch(tickets.actions.markAllDone());
    // updating all items, no need to pass item to markAllDone bc it needs no info about which item to target
  }

  return (
    <div className="clearContainer">
      <ClearButtons type="button" onClick={handleAllDoneClick}>All done</ClearButtons>
      <ClearButtons type="button" onClick={handleClearAllClick} clicked={clickCount > 0} ref={buttonRef}>
        {clickCount === 0 ? 'Clear list' : 'Are you sure?'}
      </ClearButtons>
    </div>
  );
};

export default ClearList;
