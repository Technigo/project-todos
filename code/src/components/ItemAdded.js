//ItemAdded.js handles posting of todos/tasks

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { tasks } from "reducers/tasks";
import styled from "styled-components";

export const ItemAdded = ({ itemId }) => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      tasks.actions.taskAdded({
        itemId: itemId,
        taskInfo: { text: newTask, complete: false },
      })
    );
    setNewTask("");
  };

  const emptyTask = (value) => value.replace(/\s/g, "").length === 0;

  return (
    <TaskForm onSubmit={handleSubmit}>
      <p>ADD A NEW TASK AND CLICK ON THE +</p>
      <NewTask>
        <TaskText
          type="text"
          required
          value={newTask}
          placeholder="Do next . . .✏️"
          onChange={(event) => setNewTask(event.target.value)}
        />

        <TaskButton
          type="submit"
          disabled={
            newTask.length < 5 || newTask.length > 140 || emptyTask(newTask)
          }
        >
          {" "}
          +{" "}
        </TaskButton>
      </NewTask>
      <TaskParagraph>
        <p>{newTask.length} / 140 characters</p>
      </TaskParagraph>
    </TaskForm>
  );
};

export const TaskForm = styled.form`
  width: 100%;
  font-size: 15px;
  margin-top: 15px;
  color: #8ea0e1;
  font-weight: bold;

  @media (max-width: 668px) {
    font-size: 13px;
  } ;
`;

export const NewTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskText = styled.textarea`
  border-radius: 1px;
  border: solid 2px #f6ef87;
  overflow-wrap: break-word;
  resize: none;
  min-height: 45px;
  margin: 10px 10px 0px 0px;

  @media (min-width: 768px) {
    min-height: 75px;
    min-width: 240px;
  } ;
`;

export const TaskButton = styled.button`
  align-self: center;
  background-color: #93a0d2;
  border: none;
  font-size: 30px;
  color: #ffffff;
  border-radius: 50%;
  padding: 4px 13px 6px 13px;
  margin-top: 17px;
  cursor: pointer;
  &:hover {
    background-color: #f6ef87;
    color: #ffffff;
  }
  &:disabled {
    background: #dbdad6;
    color: #b3b0a8;
    border: none;
    cursor: arrow;
  }
`;

export const TaskParagraph = styled.p`
  font-size: 15px;
  text-align: center;
  background-color: #dbdad6;
  color: black;

  @media (max-width: 668px) {
    margin: 8px;
    font-size: 13px;
    font-weight: lighter;
  } ;
`;
