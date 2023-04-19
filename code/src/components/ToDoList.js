import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const ToDoList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTask = taskList.filter((task) => task.isCompleted === true)
  const notCompletedTask = taskList.filter((task) => task.isCompleted === false)
  const dispatch = useDispatch()

  return (
    <section>
      <div className="task-count">
        <p>
          Number of tasks: {completedTask.length + notCompletedTask.length}
        </p>
        <p>
          Tasks left to complete: {notCompletedTask.length}
        </p>
        <p>
        Completed tasks: {completedTask.length}
        </p>
      </div>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <>
              <div className="task-row">
                <div className="task-item">
                  <input type="checkbox" id={singleTask.id} name="todo" onChange={() => dispatch(tasks.actions.toggleComplete(singleTask))} />
                  <label className="todo-text" htmlFor={singleTask.id}>{singleTask.description}</label>
                </div>
                <div>
                  <button className="delete-button" type="button" onClick={() => dispatch(tasks.actions.removeTask(singleTask))}>x</button>
                </div>
              </div>
              <hr />
            </>
          )
        })}
        <p className="invisible-text">Invisible</p>
        <hr />
        <p className="invisible-text">Invisible</p>
        <hr />
        <p className="invisible-text">Invisible</p>
        <hr />
        <p className="invisible-text">Invisible</p>
        <hr />
        <p className="invisible-text">Invisible</p>
        <hr />
      </ul>
    </section>
  )
}

export default ToDoList;