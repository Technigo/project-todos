import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "reducers/tasks";

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

const TaskWrapper = styled.section`
@media ${devices.tablet}{
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
}
`

const TaskCard = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.50);

@media ${devices.tablet}{
    width: 70vw;
}
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const TaskText = styled.h2`
font-weight: 400;
font-size: large;
margin: 10px 5px;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();
  
  const onTaskToggle = (taskId) =>{
    dispatch(tasks.actions.toggleTask(taskId))
  }

  return (
    <TaskWrapper>
      {" "}
      {taskList.map((task) => (
        <TaskCard key={task.id}>
          <label>
            <input type="checkbox" checked={task.isComplete} onChange={()=> onTaskToggle(task.id)} />
          </label>
          <TaskText>{task.text}</TaskText>
          <DeleteButton>
            {" "}
            <span role="img" aria-label="delete">
              𝕏
            </span>
          </DeleteButton>
        </TaskCard>
      ))}
    </TaskWrapper>
  );
};
export default TaskList;
