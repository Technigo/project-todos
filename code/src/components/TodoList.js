import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatRelative, subDays } from "date-fns";
import styled from "styled-components";

import tasks from "../reducers/tasks";

import AddTask from "./AddTask";

const BtnSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

const BtnDoAll = styled.button`
  padding: 10px;
  margin: 12px 0;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  border: 3px solid #fe3c5e;
  background-color: ${(props) => (props.clearAll ? "#FE3C5E" : "#fff")};
  color: ${(props) => (props.clearAll ? "#fff" : "#FE3C5E")};
`;

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(173, 195, 234, 0.3);
  border-radius: 10px;
  //width: 20em;
  justify-content: space-between;
  padding: 8px 24px;
  margin: 8px;
  width: 286px;
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
  margin: 8px 0 0;
  overflow-wrap: break-word;
  width: 200px;
`;

const DateP = styled.p`
  color: rgba(0, 0, 0, 0.3);
  margin: 4px 0 8px;
  font-size: 14px;
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
      <BtnSection>
        <div>
          <BtnDoAll onClick={checkAllTasks} disabled={items < 1}>
            Check All
          </BtnDoAll>
        </div>
        <div>
          <BtnDoAll onClick={clearAll} disabled={items < 1} clearAll>
            Clear All
          </BtnDoAll>
        </div>
      </BtnSection>
      <section>
        {items.map((item) => (
          <TodoDiv
            className={item.isComplete ? "checked-todo" : "unchecked-todo"}
            key={item.id}
          >
            <TodoCheckDiv>
              <div className="cntr">
                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTask(item.id)}
                  id="cbx"
                  className="hidden-xs-up"
                />
                <label htmlFor="cbx" className="cbx"></label>
              </div>
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
            <button onClick={() => onDeleteTasks(item.id)} className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                height="25"
                width="25"
              >
                <path
                  fill="#6361D9"
                  d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="tooltiptext">Delete</span>
            </button>
          </TodoDiv>
        ))}
        <AddTask />
      </section>
    </>
  );
};

export default TodoList;
