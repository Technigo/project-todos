import React from 'react';
import { useSelector } from 'react-redux';
import './TaskList.css';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <div className="tasklist-container">
        <div className="header-container">
          <h1>TODAY</h1>
        </div>
        <ul className="tasklist">
          {taskList.map((singleTask) => (
            <li className="singletask-container" key={singleTask.id}>
              {singleTask.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TaskList;
