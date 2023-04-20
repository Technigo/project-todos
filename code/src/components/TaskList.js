/* import { CheckBox } from '@mui/icons-material'; */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const TaskList = () => {
/*  const handleCheck = () => { } */
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  /* const onDeleteSingleTaskClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  } */
  const onIsCheckedCheckboxToggle = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p>
                <span>{singleTask.taskName}</span>
                {/*                 <button
                  type="button"
                  onClick={() => onDeleteSingleTaskClick(singleTask.id)}> Delete this task
                </button> */}
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  <input
                    id={`task_with_id${singleTask.id}`}
                    type="checkbox"
                    value={singleTask.isChecked}
                    onChange={() => onIsCheckedCheckboxToggle(singleTask.id)} />
                </label>
              </p>
            </li>)
        })}
      </ul>
    </section>
  )
}

export default TaskList;