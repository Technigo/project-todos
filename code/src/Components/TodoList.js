import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Task } from "./Task";
import { RoundedButton } from "./RoundedButton";
import { DeadlineCountdown } from "./DeadlineCountdown";

import { todos } from "../Reducers/todos";
import { SortTasks } from "./SortTasks";
import { FilterTasks } from "./FilterTasks";

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);
console.log(tasks)
  return (
    <Section>
      <SortTasks />
      <FilterTasks />
      {tasks.map((task) => (
        task.hidden ? (<></>):(
        <Container key={task.id}>
          <Text> {task.createdAt}</Text>
          <TaskContainer>
            <Task {...task} />
          </TaskContainer>
          <TextContainer>
            <DeadlineText>
              {task.deadline === ""
                ? "No deadline"
                : `Deadline: ${task.deadline}`}
            </DeadlineText>
            <DeadlineCountdown deadline={task.deadline} />
          </TextContainer>
          <ButtonContainer>
            <RoundedButton
              buttonText="Delete"
              action={todos.actions.removeTodo({ task: task.id })}
            />
          </ButtonContainer>
        </Container>
      )))}
    </Section>
  );
};

//styled components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 98%;
  position: relative;
  margin-bottom: 10px;
  box-shadow: 0.5px 0.5px 1px 1px rgb(88, 88, 102);
  color: rgb(110, 157, 168);
`;

const Text = styled.p`
padding: 5px 10px;
margin: 0;
text-align: right;
background-color: rgb(137, 177, 187);
color: white;
`;

const TaskContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  min-height: 100px;
  border-bottom: dashed rgb(196, 232, 241) 0.5px;
  font-size: 20px;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DeadlineText = styled.p `
padding-right: 10px;
margin: 5px;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 5px;
`;
