import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { TodoListItem } from "./TodoListItem";
import { AddButton } from "./AddButton";
import { EmptyListButton } from "./EmptyListButton";
import { useSelector } from "react-redux";
import { FinishAllTasksButton } from "./FinishAllTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/pro-light-svg-icons";

export const TodoList = () => {
  const scrollIntoView = useSelector((store) => store.screen.scrollIntoView);
  const todos = useSelector((store) => store.todo.todos);
  const ButtonsContainerRef = useRef();

  useEffect(() => {
    if (scrollIntoView) {
      ButtonsContainerRef.current.scrollIntoView();
    }
  }, [scrollIntoView]);

  return (
    <>
      {todos.length > 0 && (
        <TodoListContainer>
          <TodoListTitle>Todos</TodoListTitle>
          {todos.map((item) => {
            return <TodoListItem key={item.id} item={item} />;
          })}
        </TodoListContainer>
      )}
      {todos.length === 0 && (
        <TodoListContainerEmpty>
          <ListIconContainer>
            <FontAwesomeIcon icon={faRectangleList} />
          </ListIconContainer>
          You dont have anything to do please add some todos!
        </TodoListContainerEmpty>
      )}
      <ButtonsContainer ref={ButtonsContainerRef}>
        <FinishAllTasksButton />
        <EmptyListButton />
      </ButtonsContainer>
      <AddButton />
    </>
  );
};

const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

const TodoListContainerEmpty = styled(TodoListContainer)`
  color: #d2d3db;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ListIconContainer = styled.div`
  font-size: 30px;
`;

const TodoListTitle = styled.h2`
  color: #d2d3db;
  margin: 0;
  text-transform: uppercase;
  font-size: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
