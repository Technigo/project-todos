import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';
import DeleteTask from './DeleteTask'

const TaskList = ({ inputValue }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todolist.items);

  const handleOnChange = (id) => {
    dispatch(todolist.actions.toggleTask(id));
  };

  return (
    <section>
      {todoList.map((singletask) => {
        return (
          <div key={singletask.id}>
            <input
              type="checkbox"
              id={singletask.id}
              value={inputValue}
              checked={singletask.isChecked}
              onChange={() => handleOnChange(singletask.id)} />
            {singletask.name}<br />
            {singletask.time}<br />
            <DeleteTask singletask={singletask} />
          </div>
        )
      })}
    </section>
  )
}

export default TaskList;