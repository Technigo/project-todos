import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleToDo = (id) => {
    dispatch(todos.actions.toggleToDo(id));
  }

  const onDeleteToDo = (id) => {
    dispatch(todos.actions.deleteToDo(id));
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
                onChange={() => onToggleToDo(singleToDo.id)} />
            </lable>
            <button type="button" onClick={() => onDeleteToDo(singleToDo.id)}>X</button>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList