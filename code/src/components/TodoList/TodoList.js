import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { TodoListItem } from "./TodoListItem";
import { AddButton } from "./AddButton";
import { EmptyListButton } from "./EmptyListButton";
import { useSelector } from "react-redux";
import { FinishAllTasksButton } from "./FinishAllTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/pro-light-svg-icons";
import { grayColor } from "../style/colors";

export const TodoList = () => {
  const scrollIntoView = useSelector((store) => store.screen.scrollIntoView);
  const todos = useSelector((store) => store.todo.todos);
  const ButtonsContainerRef = useRef();

  const activities = todos.filter((todo) => todo.category === "activity");
  const business = todos.filter((todo) => todo.category === "business");
  const family = todos.filter((todo) => todo.category === "family");

  // Using a useEffect to recognise changes in the global state and then
  // either scrollIntoView or not.
  useEffect(() => {
    if (scrollIntoView) {
      ButtonsContainerRef.current.scrollIntoView();
    }
  }, [scrollIntoView]);

  return (
    <>
      {todos.length > 0 && (
        <TodoListContainer>
          {/* Only renders the title and map the array if the length of the array is larger then 0. */}
          {activities.length > 0 && (
            <>
              <TodoListTitle>Activities</TodoListTitle>
              {activities.map((item) => {
                return <TodoListItem key={item.id} item={item} />;
              })}
            </>
          )}
          {/* Only renders the title and map the array if the length of the array is larger then 0. */}
          {business.length > 0 && (
            <>
              <TodoListTitle>Business</TodoListTitle>
              {business.map((item) => {
                return <TodoListItem key={item.id} item={item} />;
              })}
            </>
          )}
          {/* Only renders the title and map the array if the length of the array is larger then 0. */}
          {family.length > 0 && (
            <>
              <TodoListTitle>Family</TodoListTitle>
              {family.map((item) => {
                return <TodoListItem key={item.id} item={item} />;
              })}
            </>
          )}
        </TodoListContainer>
      )}
      {/*Add a placeholder for when the list is empty.*/}
      {todos.length === 0 && (
        <TodoListContainerEmpty>
          <ListIconContainer>
            <FontAwesomeIcon icon={faRectangleList} />
          </ListIconContainer>
          You dont have anything to do please add some todos!
        </TodoListContainerEmpty>
      )}

      {/*ref to be able to scroll down to the buttonsContainer*/}
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
`;

const TodoListContainerEmpty = styled(TodoListContainer)`
  color: ${grayColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ListIconContainer = styled.div`
  font-size: 30px;
`;

const TodoListTitle = styled.h2`
  color: ${grayColor};
  margin: 0;
  margin-top: 10px;
  text-transform: uppercase;
  font-size: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
