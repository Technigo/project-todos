import React from "react";
import { formatRelative } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { tasks } from "reducers/tasks";
import trashgray from "../assets/trashgray.svg";
import checkblack from "../assets/checkblack.svg";

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
      <CustomCheck role="button" onClick={toggleComplete}>
        {thisTask.complete ? "" : <IncompleteCheckIcon src={checkblack} />}
        {thisTask.complete ? <CheckIcon src={checkblack} /> : ""}
      </CustomCheck>
      <TaskInfo>
        <TaskTitle>{thisTask.title}</TaskTitle>
        <TaskDate>Added {created}</TaskDate>
        <Line />
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
  margin: 5px 0;
  gap: 10px;
  color: #212529;
  color: ${(props) => (props.complete === true ? "#adb5bd" : "#212529")};
`;

const Line = styled.hr`
  border-top: 1px solid #adb5bd;
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 0px solid transparent;
`;

const CheckIcon = styled.img`
  height: 20px;
  width: 20px;
  filter: invert(11%) sepia(5%) saturate(1643%) hue-rotate(179deg)
    brightness(96%) contrast(92%);
`;

const IncompleteCheckIcon = styled.img`
  height: 20px;
  width: 20px;
  transform: scale(0);
  opacity: 0;
  filter: invert(96%) sepia(1%) saturate(3393%) hue-rotate(180deg)
    brightness(78%) contrast(87%);
`;

const CustomCheck = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #212529;
  border-radius: 4px;
  cursor: pointer;
  // display: flex;
  // justify-content: center;
  // align-items: center;

  &:hover ${IncompleteCheckIcon} {
    transition: 0.5s ease-in-out;
    opacity: 1;
    transform: scale(1);
  }

  &:hover ${CheckIcon} {
    transition: 0.5s ease-in-out;
    opacity: 0;
    transform: scale(0);
  }
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
  cursor: pointer;

  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;
