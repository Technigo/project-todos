import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //v1
  // const onDeleteTodoMutability = (index) => {
  //   dispatch(todos.actions.deleteTodo(index));
  // };

  //v2
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section>
      {items.map((item, index) => (
        <TaskDiv key={item.id}>
          <CheckBox
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <TaskText>{item.text}</TaskText>
          {/* // v1
          <button onClick={() => onDeleteTodo()}>Delete</button> */}
          {/* // v2 */}
          <Button onClick={() => onDeleteTodo(item.id)}>Delete</Button>
        </TaskDiv>
      ))}
    </section>
  );
};

const TaskDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 320px;
  height: fit-content;
  margin: 10px auto;
  border: 1px solid hotpink;
  box-shadow: 2px 2px 3px hotpink;
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
  }
`;

const TaskText = styled.p`
  width: 60%;
  max-width: 60%;
  word-wrap: break-word;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 15px;
  display: inline-block;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  margin: 15px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 15px;
  background-color: pink;
  border: 1px solid hotpink;
  box-shadow: 2px 2px 2px hotpink;
  border-radius: 5px;
  padding: 10px;
  cursor: crosshair;
`;
