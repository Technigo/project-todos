import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const TodoSummary = () => {
  const list = useSelector((store) => store.todos.list);

  const doneList = list.items.filter((item) => item.done);

  return (
    <div>
      <TaskCount>
        {doneList.length}/{list.items.length} tasks done!
      </TaskCount>
    </div>
  );
};

const TaskCount = styled.h2`
  font-family: "Pangolin", cursive;
  text-align: center;
  color: #fff;
  font-weight: lighter;
`;
