import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatRelative, subDays } from "date-fns";
import styled from "styled-components";

import tasks from "../reducers/tasks";

import AddTask from "./AddTask";
import TaskCounter from "./TaskCounter";

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 20em;
  justify-content: space-between;
  padding: 8px 24px;
  margin: 8px;
`;

const TodoCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TaskDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const InputP = styled.p`
  color: #fff;
  margin: 8px 0 0;
`;

const DateP = styled.p`
  color: rgba(255, 255, 255, 0.3);
  margin: 4px 0 8px;
  font-size: 14px;
`;

const DeleteTaskBtn = styled.button`
  background: #ff0000;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  cursor: pointer;
`;

const TodoList = () => {
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  };

  const onDeleteTasks = (id) => {
    dispatch(tasks.actions.deleteTasks(id));
  };

  const clearAll = () => {
    dispatch(tasks.actions.clearAll());
  };

  const checkAllTasks = () => {
    dispatch(tasks.actions.checkAllTasks());
  };

  const taskDate = formatRelative(subDays(new Date(), 0), new Date(), {
    addSuffix: true,
  });

  return (
    <>
      <section>
        <TaskCounter />
        <button onClick={clearAll} disabled={items < 1}>
          Clear All
        </button>
        <button onClick={checkAllTasks} disabled={items < 1}>
          Check All
        </button>
        {items.map((item) => (
          <TodoDiv key={item.id}>
            <TodoCheckDiv>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTask(item.id)}
              />
              <TaskDiv>
                <InputP
                  className={
                    item.isComplete ? "complete-todo" : "uncomplete-todo"
                  }
                >
                  {item.text}
                </InputP>
                <DateP>{taskDate}</DateP>
              </TaskDiv>
            </TodoCheckDiv>
            <DeleteTaskBtn onClick={() => onDeleteTasks(item.id)}>
              x{" "}
            </DeleteTaskBtn>
          </TodoDiv>
        ))}
      </section>
      <AddTask />
    </>
  );
};

export default TodoList;
