import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  return (
    <>
      <SmallHeaderWrapper>
        <SmallHeader>This is your to do</SmallHeader>
        <Link to="/">
          <BackButton>
            {" "}
            Go back<br></br>to start{" "}
          </BackButton>
        </Link>
      </SmallHeaderWrapper>
      {items.map((item) => (
        <StyledTodoItemId key={item.id}>
          <StyledTodoContainer>
            <label className="container">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-wrapper">{item.text}</p>
          </StyledTodoContainer>
          <ButtonBox>
            <ButtonInput
              edge="end"
              aria-label="edit"
              onClick={() => onDeleteTodo(item.id)}
            >
              <FaTrashAlt></FaTrashAlt>
            </ButtonInput>
          </ButtonBox>
        </StyledTodoItemId>
      ))}
    </>
  );
};

export default TodoList;

const SmallHeader = styled.span`
  display: flex;
  font-size: 30px;
  justify-content: center;
  font-family: "Baloo 2", cursive;
  color: black;
  border-bottom: solid black 2px;
  @media (min-width: 768px) {
    font-size: 55px;
    padding: 20px;
    margin-left: 90px;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const SmallHeaderWrapper = styled.span`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 30px;
  }
`;
const BackButton = styled.button`
  display: flex;
  color: grey;
  background: rgba(233, 181, 181, 0.6);
  padding: 10px;
  border-radius: 50px;
  justify-content: space-around;
  font-family: "Baloo 2", cursive;
  border: none;

  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 20px;
    color: grey;
    background: rgba(233, 181, 181, 0.6);
    padding: px;
  }
`;

const ButtonBox = styled.span`
  display: flex;
  flex-direction: flex-end;
  margin-right: 30px;
`;
const ButtonInput = styled.button`
  margin-right: 10px;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  background-color: rgb(109, 100, 100);
  color: #ffffff;
  text-transform: uppercase;
  border-style: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
  height: 50px;
  width: 50px;
`;

const StyledTodoItemId = styled.div`
  display: flex;
  background: rgba(233, 181, 181, 0.6);
  margin: 10px 0;
  font-size: 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 4px 0 rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    margin-left: 50px;
    margin-top: 20px;
    margin-right: 50px;
    font-size: 30px;
  }
`;
const StyledTodoContainer = styled.span`
  display: flex;
  align-items: center;
`;
