import React from 'react';
import { useSelector } from 'react-redux';

const CheckboxToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {taskList.map((singleTodo) => {
          return (
            <>
              <p>
                <input type="checkbox" id={singleTodo.id} name="todo" />
                <label htmlFor={singleTodo.id}>{singleTodo.description}</label>
              </p>
              <hr />
            </>
          )
        })}
      </ul>
    </section>
  )
}

export default CheckboxToDoList;