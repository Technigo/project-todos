import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { LottieAnimation } from '../Animation/LottieAnimation'
import noteIcon from '../Animation/noteIcon.json';
import { Task } from "./Task/Task";
import { TaskFooter } from "./Task/TaskFooter";
import { SortTasks } from "./FilterSort/SortTasks";
import { FilterTasks } from "./FilterSort/FilterTasks";
import { Sidebar } from './Sidebar'

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);
  const [expand, setExpand] = useState(false);

  return (
    <Section>
      {tasks.length === 0 ? (
        <EmptyState> <LottieAnimation lotti={noteIcon} height={300} width={300} /></EmptyState>
      ) : (
      <Main>
        <Sidebar />
        <Column>
          <SortContainer>
            <Menu onClick={() => setExpand(!expand)}> sort and filter </Menu>
            <SortInner expand={expand}>
              <SortTasks />
              <FilterTasks />
            </SortInner>
          </SortContainer>
          {tasks.map((task) =>
            task.hidden ? (
              <></>
            ) : (
              <TaskContainer key={task.id}>
                <Task {...task} />
                <TaskFooter {...task} />
              </TaskContainer>
            )
          )}
          </Column>
        </Main>
      )}
    </Section>
  );
};

//styled components
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px){
    width: 500px;
  }
`;

const EmptyState = styled.div`
  width: 100%;
  min-height: calc(100vh - 440px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;

  @media (min-width: 768px) {
    min-height: calc(100vh - 540px);
  }
`;

const Main = styled.div `
display: flex;
width: 100%;
`

const Column = styled.div `
flex: 1 1 auto;
margin-left: 25px;
display: flex;
flex-direction: column` 

const SortContainer = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

const Menu = styled.button`
  height: 20px;
  background: rgb(217, 234, 238);
  border: none;
  font-family: "Raleway", sans-serif;
  color: darkcyan;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SortInner = styled.div`
  display: ${(props) => (props.expand ? "flex" : "none")};
  flex-direction: column;
`;

const TaskContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  box-shadow: 0.5px 0.5px 1px 1px rgb(88, 88, 102);
  color: rgb(110, 157, 168);
`;
