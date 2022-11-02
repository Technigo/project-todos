import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleCheckbox = (id) => {
    dispatch(todos.actions.toggleCheckbox(id));
  }
  return (
    <section>
      {toDoList.map((singleToDo) => {
        return (
          <article>
            <h2>{singleToDo.text}</h2>
            <lable>Task is Done
              <input
                type="checkbox"
                checked={singleToDo.complete}
                onChange={() => onToggleCheckbox(singleToDo.id)} />
            </lable>
            <button type="button">X</button>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList