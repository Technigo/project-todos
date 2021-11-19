import React from 'react';
import { useSelector } from 'react-redux';
import img from "../img/relaxing.png"

const EmptyField = () => {
  const items = useSelector((store) => store.todos.items)
  const activeTodos = items.length
  const emptyField = activeTodos === 0

  return (
    <>
    { emptyField === true &&
    <div className="empty-field">
      <img src={img} alt="relaxing-img"/>
      <h4>Nothing to do</h4>
      <p>Write your task below and tap the button to create a new to-do</p>
      </div>}
    </>
  )
};

export default EmptyField