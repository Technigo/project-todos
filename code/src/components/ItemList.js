//ItemList.js stores all tasks/todos
import React from "react";
import { useSelector } from "react-redux";
import { ItemsAll } from "components/ItemsAll";

import styled from "styled-components";

export const ItemList = () => {
  const allTasks = useSelector((store) => store.tasks.list);
  const wholeList = useSelector((store) => store.tasks.list.tasks);

  if (wholeList.length === 0) {
    return (
      <ListEmpty>
        <div>
          <h1 className="listEmpty">
            {" "}
            You are clear of duties for now, good on you!
          </h1>
          <img className="tasksDone" alt="yay" src="yay.png" width="180px" />
        </div>
      </ListEmpty>
    );
  }
  return (
    <section>
      {allTasks.tasks.map((task, index) => (
        <ItemsAll key={task.id} task={task} taskIndex={index} />
      ))}
    </section>
  );
};

export const ListEmpty = styled.div`
  text-align: center;
  margin-top: 2px;
  color: #93dece;
  font-size: 11px;
  font-family: "Inconsolata", monospace;

  @media (max-width: 668px) {
    font-size: 10px;
    font-weight: normal;
    align-items: center;
  } ;
`;
