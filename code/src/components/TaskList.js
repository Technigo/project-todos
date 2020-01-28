import React from "react";
import { useSelector } from "react-redux";
import { Input } from "components/Input";
import { Toggle } from "./Toggle";
import { DeleteOne } from "./DeleteOne";
import { Important } from "./Important";

import styled from "styled-components";
import { EmptyState } from "./EmptyState";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.tasks.listFilter);
  console.log(filter);

  const filterTasks = tasks.taskData.filter(item => {
    if (filter === "SHOW_ACTIVE") {
      return !item.complete;
    } else if (filter === "SHOW_COMPLETED") {
      return item.complete;
    } else {
      return true;
    }
  });

  return (
    <div>
      <Input />
      {tasks.total === 0 && <EmptyState />}
      {filterTasks.map(task => {
        return (
          <Container className="task" key={task.id}>
            <Toggle ifCompleted={task.complete} id={task.id} />
            <P key={task.id}>{task.text}</P>
            <Important ifImportant={task.important} id={task.id} />
            <DeleteOne id={task.id} style={{ alignSelf: "flex-end" }} />
          </Container>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;
  background: #eee;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 10px;
  margin: 0.5rem 1.5rem;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 900px) {
    margin: 0.5rem 3rem;
  }
`;

const P = styled.p`
  display: flex;
  width: 100%;
  background: #eee;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 10px;
`;
