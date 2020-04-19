import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TodoSummary = () => {
  const list = useSelector((store) => store.todos.list);

  const doneList = list.items.filter((item) => item.done);

  return (
    <div>
      {list.items.length !== 0 && (
        <TaskCount>
          {doneList.length}/{list.items.length} tasks done!
        </TaskCount>
      )}
      {list.items.length === 0 && (
        <GettingStarted>Time to write some tasks!</GettingStarted>
      )}
    </div>
  );
};

const TaskCount = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
`;

const GettingStarted = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
  font-size: 34px;
`;
