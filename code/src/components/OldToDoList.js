import React from 'react';
import { useSelector } from 'react-redux';

const OldToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {taskList.map((singleTodo) => {
          return (
            <div className="todo-text">
              <li key={singleTodo.id}>{singleTodo.description}</li>
              <hr />
            </div>
          )
        })}
      </ul>
    </section>
  )
}

export default OldToDoList;