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
        <AddNewTask type="submit" value="+" active={item.length > 0} />
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

const AddNewTask = styled.input`
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  line-height: 20px;
  margin: 0px 30px;
  padding: 0px;
  text-align: center;
  opacity: ${props => (props.active ? "1" : "0.6")};
`;

const TaskText = styled.input`
  border-style: hidden;
  background-color: #fdfdfd;
  width: 100%;
  height: 30px;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
  @media (min-width: 768px) {
    width: 40vw;
  }
`;
