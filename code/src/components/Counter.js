/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const toDoCounter = useSelector((store) => store.tasks.items.length)
  const completeToDo = useSelector(
    (store) => store.tasks.items.filter((item) => item.isDone)
  );

  return (
    <counter-wrapper>
            &quot;You have done {completeToDo.length} out of {toDoCounter} today!&quot;
    </counter-wrapper>
  );
};

export default Counter;