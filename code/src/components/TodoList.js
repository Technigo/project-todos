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
        <ContentDiv>
          <TaskDiv key={item.id}>
            <Button onClick={() => onDeleteTodo(item.id)}>X</Button>
            <TaskText>{item.text}</TaskText>
            {/* // v1
          <button onClick={() => onDeleteTodo()}>Delete</button> */}
            {/* // v2 */}
            <CheckBox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
          </TaskDiv>
          <DateStamp>
            <p>Posted: {moment(date.createdAt).fromNow()}</p>
          </DateStamp>
        </ContentDiv>
      ))}
    </section>
  );
};

const ContentDiv = styled.div`
  margin: 10px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fceef5;
  width: 320px;
  height: 100px;
  /* border: 1px solid lightgrey; */
  border-radius: 20px;

  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
  }
`;

const TaskDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin: auto;
`;

const DateStamp = styled.div`
  box-sizing: border-box;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 10px;
  color: #f3bad6;
  height: fit-content;
  margin: auto;
`;

const TaskText = styled.p`
  width: 70%;
  max-width: 80%;
  word-wrap: break-word;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #e05297;
  font-size: 16px;
  margin: auto;

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
  appearance: button;
  background-color: #ea86b6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #e05297;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 5px 10px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  :after {
    background-clip: padding-box;
    background-color: #f3bad6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  :main,
  :focus {
    user-select: auto;
  }

  :hover:not(:disabled) {
    filter: brightness(1.1);
  }

  :disabled {
    cursor: auto;
  }

  :active:after {
    border-width: 0 0 0px;
  }

  :active {
    padding-bottom: 10px;
  }
`;
