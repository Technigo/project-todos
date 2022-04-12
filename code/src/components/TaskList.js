import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "reducers/tasks";

const TaskItem = styled.article`
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();
  
  const onTaskToggle = (taskId) =>{
    dispatch(tasks.actions.toggleTask(taskId))
  }

  return (
    <section>
      {" "}
      {taskList.map((task) => (
        <TaskItem key={task.id}>
          <h2>{task.text}</h2>
          <label>
            completed
            <input type="checkbox" checked={task.isComplete} onChange={()=> onTaskToggle(task.id)} />
          </label>
          <DeleteButton>
            {" "}
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton>
        </TaskItem>
      ))}
    </section>
  );
};
export default TaskList;
