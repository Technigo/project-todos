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
            <CheckBox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <TaskText>{item.text}</TaskText>
            {/* // v1
          <button onClick={() => onDeleteTodo()}>Delete</button> */}
            {/* // v2 */}

            <Button onClick={() => onDeleteTodo(item.id)}>
              {" "}
              <i class="fas fa-trash-alt"></i>{" "}
            </Button>
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
  background-color: white;
  width: 320px;
  height: fit-content;
  border: 1px solid lightgrey;
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 500px;
  }
`;

const TaskDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: fit-content;
  margin: 30px auto 0px;

  @media (min-width: 700px) {
    width: 400px;
  }
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

  @media (min-width: 700px) {
    font-size: 12px;
  }
`;

const TaskText = styled.p`
  width: 100%;
  height: fit-content;
  word-wrap: break-word;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  color: hotpink;
  font-size: 16px;
  margin: 5px 15px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

const Button = styled.button`
  font-size: 1.5em;
  margin: 10px;
  color: hotpink;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
