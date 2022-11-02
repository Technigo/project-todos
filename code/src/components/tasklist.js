/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import Header from './header';
import NewTask from './newTask';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  const uncompletedTasks = () => {
    return taskList.filter((item) => !item.complete);
  };

  const completedTasks = () => {
    return taskList.filter((item) => item.complete);
  };

  return (
    <div>
      <Header />
      <section>
        <NewTask />
        <button type="button">
          Uncompleted tasks: {uncompletedTasks().length}
        </button>
        <button type="button">
          Completed tasks: {completedTasks().length}
        </button>
        <div className="tasklist">
          {taskList.map((singleTask) => {
            return (
              <article key={singleTask.id}>
                <div className="check-task">
                  <label>
                    <input
                      type="checkbox"
                      checked={singleTask.complete}
                      onChange={() => onCompleteToggle(singleTask.id)}
                    />
                  </label>
                  <h2>{singleTask.text}</h2>
                </div>
                <button
                  className="delete"
                  type="button"
                  onClick={() => onDeleteTask(singleTask.id)}
                >
                  -
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TaskList;
