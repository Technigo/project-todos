import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';

const List = () => {
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  return (
    <section>
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>{task.task}
              <label htmlFor="task">Done?
                <input
                  id="task"
                  type="checkbox"
                  checked={task.done}
                  onChange={() => dispatch(toDos.actions.toggleDone(task.id))} />
              </label>
            </li>
          )
        })}
      </ul>
    </section>
  )
};

export default List;