import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
        <StyledTodoItem key={item.id}>
          <StyledTaskContainer>
            <label className="container">
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span className="checkmark"></span>
            </label>
            <p className="text-wrapper">{item.text}</p>
          </StyledTaskContainer>
          <ButtonBox>
            <ButtonInput
              edge="end"
              aria-label="edit"
              onClick={() => onDeleteTodo(item.id)}
            >
              <FaTrashAlt></FaTrashAlt>
            </ButtonInput>
          </ButtonBox>
        </StyledTodoItem>
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
  color: rgb(109, 100, 100);
`;
const SmallHeaderWrapper = styled.span`
  display: flex;
  justify-content: center;
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
`;

const StyledTodoItem = styled.div`
  display: flex;
  background: rgba(233, 181, 181, 0.6);
  margin: 10px 0;
  font-size: 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 4px 0 rgba(0, 0, 0, 0.15);
`;
const StyledTaskContainer = styled.span`
  display: flex;
  align-items: center;
`;
