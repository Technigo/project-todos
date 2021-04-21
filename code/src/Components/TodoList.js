import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Task } from "./Task/Task";
import { TaskFooter } from "./Task/TaskFooter";
import { SortTasks } from "./FilterSort/SortTasks";
import { FilterTasks } from "./FilterSort/FilterTasks";

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);
  console.log(tasks);
  return (
    <Section>
      <Wrapper>
        <SortTasks />
        <FilterTasks />
      </Wrapper>
      {tasks.map((task) =>
        task.hidden ? (
          <></>
        ) : (
          <Container key={task.id}>
            <Task {...task} />
            <TaskFooter {...task} />
          </Container>
        )
      )}
    </Section>
  );
};

//styled components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div `
display: flex;
flex-direction: column;
width: 100%;`

const Container = styled.div`
  width: 98%;
  position: relative;
  margin-bottom: 10px;
  box-shadow: 0.5px 0.5px 1px 1px rgb(88, 88, 102);
  color: rgb(110, 157, 168);
`;
