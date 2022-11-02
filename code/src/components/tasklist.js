/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { Task } from 'styledComponents/Task';
import Header from './header';
import NewTask from './newTask';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const uncompletedTasks = taskList.filter((item) => !item.complete);
  const completedTasks = taskList.filter((item) => item.complete);

  const dispatch = useDispatch();

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  const onCompleteAll = () => {
    dispatch(tasks.actions.completeAll());
  };

  return (
    <div>
      <Header />
      <section>
        <button type="button">
          Uncompleted tasks: {uncompletedTasks.length}
        </button>
        <button type="button">Completed tasks: {completedTasks.length}</button>
        <div className="tasklist">
          <NewTask />
          {taskList.map((singleTask) => {
            return (
              <Task key={singleTask.id}>
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
                  x
                </button>
              </Task>
            );
          })}
          <button type="button" onClick={onCompleteAll}>
            Complete all
          </button>
        </div>
      </section>
    </div>
  );
};

export default TaskList;
