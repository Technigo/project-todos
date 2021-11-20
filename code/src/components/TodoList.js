import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";

import todos from "../reducers/todos";
import TheStart from "./TheStart";
const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  const TodoListSection = styled.section`
    color: black;
    width: 90%;
    margin-top: 0;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 15px;
    display: flex;
    justify-content: center;
  `;
  const ButtonBox = styled.span`
    display: flex;
    flex-direction: flex-end;
  `;
  const ButtonInput = styled.button`
    margin-right: 10px;
    margin-top: 10px;
    height: 30px;
    width: 30px;
    background-color: #ff0266;
    color: #ffffff;
    text-transform: uppercase;
    border-style: none;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
  `;
  const CheckMark = styled.span`
    margin-top: 15px;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    display: flex;
    border-radius: 15px;
    margin-left: 10px;
  `;
  const Container = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;
  const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `;

  return (
    <>
      <main>{items.length < 1 && <TheStart />}</main>
      {items.length > 0 && (
        <TodoListSection>
          {items.map((item) => (
            <div className="todo-wrapper" key={item.id}>
              <span className="label-wrapper">
                <p className="text-wrapper">{item.text}</p>
                <Container>
                  <Input
                    type="checkbox"
                    checked={item.isComplete}
                    onChange={() => onToggleTodo(item.id)}
                  />
                </Container>
              </span>
              <ButtonBox>
                <CheckMark></CheckMark>
                <ButtonInput
                  edge="end"
                  aria-label="edit"
                  onClick={() => onDeleteTodo(item.id)}
                >
                  <FaTrashAlt></FaTrashAlt>
                </ButtonInput>
              </ButtonBox>
            </div>
          ))}
        </TodoListSection>
      )}
    </>
  );
};

export default TodoList;
