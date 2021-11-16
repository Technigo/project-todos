import React, { useState } from "react";
import styled from "styled-components/macro";
import { CategoryIcon } from "./CategoryIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";

export const NewTodoScreen = () => {
  const [category, setCategory] = useState("business");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoPlace, setTodoPlace] = useState("");
  const [todoTime, setTodoTime] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setCategory("business");
    setTodoTime("");
    setTodoPlace("");
    setTodoTitle("");
  };

  return (
    <NewTodoContainer>
      <GoBackIconHeaderContainer>
        <GoBackIcon
          onClick={() => {
            dispatch(todo.actions.currentScreen({ screen: "todoList" }));
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </GoBackIcon>
        <Header3>Add new todo</Header3>
      </GoBackIconHeaderContainer>
      <ContentContainer>
        <CategoryIcon category={category} completed={false} canClick={false} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              todo.actions.addNewTodo({
                category: category,
                title: todoTitle,
                place: todoPlace,
                time: todoTime,
              })
            );
            reset();
            dispatch(todo.actions.currentScreen({ screen: "todoList" }));
          }}
        >
          <select
            id="iconCategory"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="business">Business</option>
            <option value="activity">Activity</option>
            <option value="family">Family</option>
          </select>
          <label htmlFor="title" />
          <TodoInput
            maxLength="20"
            id="title"
            name="title"
            placeholder="Activity"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            required
          ></TodoInput>
          <label htmlFor="place" />
          <TodoInput
            maxLength="20"
            id="place"
            name="place"
            placeholder="Place"
            value={todoPlace}
            onChange={(event) => setTodoPlace(event.target.value)}
          ></TodoInput>
          <label htmlFor="place" />
          <TodoInput
            maxLength="20"
            id="time"
            name="time"
            placeholder="Time"
            value={todoTime}
            onChange={(event) => setTodoTime(event.target.value)}
          ></TodoInput>
          <SubmitButton type="submit">Add your Todo</SubmitButton>
        </Form>
      </ContentContainer>
    </NewTodoContainer>
  );
};

const NewTodoContainer = styled.section`
  background-color: #d98a60;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const GoBackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const GoBackIconHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
`;

const Header3 = styled.h3`
  color: black;
  margin: 0;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding-top: 20px;
`;

const Form = styled.form`
  padding-top: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const SubmitButton = styled.button`
  border-radius: 3px;
  background-color: #d2d3db;
  text-transform: uppercase;
  padding: 10px;
  border: 1px solid black;
  letter-spacing: 2px;
`;

const TodoInput = styled.input`
  background-color: #d98a60;
  border: none;
  border-bottom: #d2d3db 1px solid;
  padding: 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    font-size: 15px;
    font-weight: 100;
  }
`;
