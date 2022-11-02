import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';

const List = () => {
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  return (
    <section>
      <fieldset>
        <legend>New task</legend>
        {taskList.map((task) => {
          return (
            <article key={task.id}>
              <h2>{task.name}</h2>
              <label htmlFor="task">Done?
                <input
                  id="task"
                  type="checkbox"
                  checked={task.done}
                  onChange={() => dispatch(toDos.actions.toggleDone(task.id))} />
              </label>
            </article>
          )
        })}
        <label htmlFor="newTask">
          <input type="text" />
        </label>
        <button type="button">Add new task</button>
      </fieldset>
    </section>
  )
};

export default List;