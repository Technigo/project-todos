import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { tasks } from "../reducers/tasks";

export const AddTask = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (item !== "") dispatch(tasks.actions.addItem(item));
    setItem("");
  };

  return (
    <TaskForm onSubmit={handleSubmit}>
      <NewTask>
        <AddNewTask type="submit" active={item.length > 0 ? true : false}>
          +
        </AddNewTask>
        <label>
          <TaskText
            type="text"
            value={item}
            onChange={e => setItem(e.target.value)}
            placeholder="Add task"
          />
        </label>
      </NewTask>
    </TaskForm>
  );
};

const NewTask = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 85px;
  background-color: #fdfdfd;
  border-bottom: 2px solid #f0f0f0;
`;

const TaskForm = styled.form`
  width: 100%;
`;

const AddNewTask = styled.button`
  border: none;
  background-color: #fff;
  color: #000;
  width: 30px;
  height: 30px;
  font-size: 30px;
  margin: 0px 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? "1" : "0.6")};
`;

const TaskText = styled.input`
  border-style: hidden;
  background-color: #fdfdfd;
  width: 100%;
  height: 30px;
  font-size: 20px;

  @media (min-width: 768px) {
    width: 40vw;
  }
`;
