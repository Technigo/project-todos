import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";
import moment from "moment";

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

  //console.log("the date:", todaysDate);

  //v2
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const date = new Date();
  // const todaysDate = date.toString().slice(0, 21);

  return (
    <section>
      {items.map((item, index) => (
        <TaskDiv key={item.id}>
          <Button onClick={() => onDeleteTodo(item.id)}>-</Button>
          <TaskText>{item.text}</TaskText>
          {/* // v1
          <button onClick={() => onDeleteTodo()}>Delete</button> */}
          {/* // v2 */}
          <CheckBox
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <DateStamp>
            <p>Posted: {moment(date.createdAt).fromNow()}</p>
          </DateStamp>
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
  background-color: #eddcff;
  width: 320px;
  height: fit-content;
  margin: 10px auto;
  border: 1px solid #c690ff;
  box-shadow: 2px 2px 3px #c690ff;
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
  }
`;

const DateStamp = styled.div`
  box-sizing: border-box;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  color: #c690ff;
  height: fit-content;
  margin: 10px;
`;

const TaskText = styled.p`
  width: 60%;
  max-width: 60%;
  word-wrap: break-word;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #c690ff;
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  display: inline-block;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
  border: none;
  color: #c690ff;
  border-radius: 8px;
  background-color: #eddcff;
  cursor: crosshair;

  :hover {
    background-color: #c690ff;
    color: #eddcff;
    width: 30px;
  }
`;
