import React from 'react';
import { useSelector } from 'react-redux';

const EmptyField = () => {
  const items = useSelector((store) => store.todos.items)
  const activeTodos = items.length
  const emptyField = activeTodos === 0

  return (
    <>
    { emptyField === true &&
    <div className="empty-field">
      <h2>No to-do's</h2>
      <p>Write your task below and tap the button to create a new to-do</p>
      {/* <img src={img} alt="x-img" /> */}
      </div>}
    </>
  )
};

export default EmptyField