import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

export const TaskSummery = () => {
  // Get list information for this task-list:
  const list = useSelector((store) => store.tasks.list);

  // this variable contains the nr of items that are done:
  const numDone = list.items.filter((item) => item.done).length;

  return (
    <SummeryContainer>
      <SummeryTextThin> COMPLETED </SummeryTextThin>
      <NumberDone>{numDone}</NumberDone>
      <SummeryTextThin>
        {" "}
        OUT OF {list.items.length} THINGS TO DO{" "}
      </SummeryTextThin>
      {/* COMPLETED <NumberDone>{numDone}</NumberDone>/{list.items.length}   */}
    </SummeryContainer>
  );
  /*       <section className="todo-summery">
        <h2>
          {numDone}/{list.items.length} are done 💚 
        </h2>
      </section>
  ) */
};

const SummeryContainer = styled.section`
  font-size: 14px;
  font-weight: 200;
  color: #9e9ea7;
  margin: 30px 0 0 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const NumberDone = styled.h3`
  background: #3d415b;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  margin: 0px 10px 0px 10px;
  padding: 3px 3px 3px 3px;
  font-weight: 600;
`;

const SummeryTextThin = styled.h3`
  font-size: 14px;
  font-weight: 200;
  color: #9e9ea7;
  margin: 2px 0 0 0px;
`;
