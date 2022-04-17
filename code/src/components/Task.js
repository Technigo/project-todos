import React from "react";
import { useDispatch } from "react-redux";
import { listSlice } from "reducers/listSlice";
import moment from "moment";
import styled from "styled-components";

const TaskContainer = styled.article`
/* width: 100%; */
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
`;

const ToDo = styled.label`
  font-weight: 500;
  color: inherit;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  opacity: ${(props) => (props.complete ? "50%" : "100%")};
`;

const Date = styled.p`
  color: grey;
  font-size: 12px;
  padding: 0;
  margin: 3px 0 0 0;
`;

const Checkbox = styled.input`
  display: flex;
  justify-self: center;
  align-self: center;
  margin-right: 5px;
  font-family: inherit;
  color: black;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveIcon = styled.img`
  width: 16px;
`;

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <TaskContainer>
      <Checkbox
        id={task.id}
        aria-label="checked"
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(listSlice.actions.toggleStatus(task.id))}
      />
      <div>
        <ToDo htmlFor={task.id} complete={task.isDone}>
          {task.description}
        </ToDo>
        <Date>Created {moment(task.createdAt).format("ddd, MMM Do YYYY @ hh:mm a")}</Date>
      </div>
      <RemoveButton
        type="button"
        onClick={() => {
          dispatch(listSlice.actions.removeTask(task.id));
        }}
      >
        <RemoveIcon src="../../images/trash.png" alt="trash icon" />
      </RemoveButton>
    </TaskContainer>
  );
};

export default Task;
