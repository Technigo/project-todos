import React from 'react';
import { useSelector } from 'react-redux';
import { CheckBox } from './Checkbox';

export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <div key={singleTask.id}>
              <li>{singleTask.task}</li>
              <CheckBox />
            </div>
          )
        })}
      </ul>
    </section>
  )
}
