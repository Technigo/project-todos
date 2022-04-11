import React from "react";
import { formatRelative } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { tasks } from "reducers/tasks";
import trashgray from "../assets/trashgray.svg";

const Task = ({ taskid }) => {
  const dispatch = useDispatch();
  const thisTask = useSelector((store) => store.tasks.task).find(
    (task) => taskid === task.taskid
  );

  const toggleComplete = () => {
    dispatch(
      tasks.actions.toggleTask({
        taskid: thisTask.taskid,
        projectid: thisTask.projectid,
      })
    );
  };

  const deleteTask = () => {
    dispatch(
      tasks.actions.deleteTask({
        taskid: thisTask.taskid,
      })
    );
  };

  const created = formatRelative(new Date(thisTask.added), new Date());
  return (
    <TaskWrapper complete={thisTask.complete}>
      <div>
        <input
          type="checkbox"
          checked={thisTask.complete}
          onChange={toggleComplete}
        />
      </div>
      <TaskInfo>
        <TaskTitle>{thisTask.title}</TaskTitle>
        <TaskDate>Added {created}</TaskDate>
      </TaskInfo>
      <div role="button" onClick={deleteTask}>
        <Icon src={trashgray} alt="delete task." />
      </div>
    </TaskWrapper>
  );
};

export default Task;

const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  // border: 1px solid black;
  margin: 5px 0;
  gap: 10px;
  color: #212529;
`;

const TaskInfo = styled.div`
  justify-self: stretch;
`;

const TaskTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
`;

const TaskDate = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
