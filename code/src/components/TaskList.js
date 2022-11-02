/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';
// import AddTask from './AddTask';
import styled from 'styled-components'
import Task from './Task';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  return (
    <TaskListSection>
      {taskList.map((taskData) => {
        return (
          <section className="todo-wrapper">
            <Task
              key={taskData.id}
              taskData={taskData} />
          </section>
        );
      })}
    </TaskListSection>
  )
}

export default TaskList;

const TaskListSection = styled.section`
border: solid 2px red;
`