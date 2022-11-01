/* eslint-disable linebreak-style */
/* eslint-disable react/void-dom-elements-no-children */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';

export const ToDoList = () => {
  // const dispatch = useDispatch()
  const tasksList = useSelector((store) => store.tasks)
  return (
    <>
      <h1>To do list</h1>
      {tasksList.map((item) => {
        return (
          <div className="toDoList" key={item.id}>
            <input
              type="checkbox" />
            <p>{item.text}</p>

          </div>
        )
      })}
    </>

  )
}
