import React from "react";
import { useSelector } from "react-redux";
import { Input } from "components/Input";
import { Toggle } from "./Toggle";
import { DeleteOne } from "./DeleteOne";
import { Important } from "./Important";
// import { tasks } from "reducers/tasks";

import styled from "styled-components";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);

  return (
    <div>
      <Input />
      {tasks.taskData.map(task => {
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
  width: 80%;
  background: #eee;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 10px;
  margin: 0.5rem 1.5rem;
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
