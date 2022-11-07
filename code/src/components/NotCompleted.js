import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/task';

const NotCompletedTask = () => {
  const items = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  const notCompleteTask = items.filter((taskItem) => !taskItem.isCaught);

  const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId));
  };

  const onDeleteTask = (taskId) => {
    dispatch(tasks.actions.deleteItem(taskId));
  };

  const onClickAllCompleted = () => {
    dispatch(tasks.actions.allCompleteTask());
  };

  const NotDoneSummary = notCompleteTask.length;

  return (
    <section className="wrapper">
      <p className="task-to-do">I have {NotDoneSummary} on my to-do list.</p>
      {notCompleteTask.map((taskItem) => (
        <div className="taskConitainer" key={taskItem.id}>
          <div className="">
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
        
        </div>
      ))}
      <button className="all-btn" onClick={onClickAllCompleted}>
        All Done
      </button>
    </section>
  );
};

export default NotCompletedTask;
