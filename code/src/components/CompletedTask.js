import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/task';

const CompletedTask = () => {
  const items = useSelector((store) => store.tasks.items);
// const item = useSelector((store) => store.tasks.items.filter((item)=>item.isCompleted === true)
// )

  const dispatch = useDispatch();
// const completeTask = items.filter((taskItem) => taskItem.isCompleted);
  const completeTask = items.filter((taskItem) => taskItem.isCaught);

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId));
  };

  const onDeleteTask = (taskId) => {
    dispatch(tasks.actions.deleteItem(taskId));
  };
  
  const onClickAllTaksDelete = (taskId) => {
    dispatch(tasks.actions.allTaskDelete(taskId));
  };

  const doneSummary = completeTask.length;

  return (
    <section className="wrapper">
      <p className="task-to-do">I Have done {doneSummary} by now 😎 </p>
      {completeTask.map((taskItem) => (
        <div className="taskConitainer" key={taskItem.id}>
          <div>
            <h2>{taskItem.text}</h2>
            <label>
              <input
                id="checkbox"
                type="checkbox"
                hidden
                checked={taskItem.isCaught}
                onChange={() => onTaskToggle(taskItem.id)}
              />
              {/* <label for="checkbox" className="checkbox">
                <span>🗑</span>
              </label> */}
            </label>
          </div>
          <button
            className="deletebtn"
            onClick={() => onDeleteTask(taskItem.id)}
          ></button>
        </div>
      ))}
      <button className="delete-all-button" onClick={onClickAllTaksDelete}>
        Delete all
      </button>
    </section>
  );
};

export default CompletedTask;
