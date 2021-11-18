import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import todos from "../reducers/todos";
import AddTodo from "./AddTodo";
import Header from "./Header";

const TodoForm = styled.form`
  position: relative;
  display: flex;
  margin: 20px;
  padding: 10px;
  border-bottom: 1px solid pink;
  min-height: 30px;
  width: 220px;
  margin: 20px auto;
  text-align: center;
  align-items: center;

  p {
    overflow-wrap: break-word;
    max-width: 160px;
    font-size: 18px;
    text-transform: uppercase;
  }
`;
const ButtonTrash = styled.button`
  position: absolute;
  display: flex;
  right: 7px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  color: #cf7b7b;
  background-color: rgba(235, 227, 227, 1);
  margin-top: auto;

  &:hover {
    color: red;
  }
`;
const Label = styled.label`
  margin-top: auto;
  position: absolute;
  right: 40px;
  font-size: 30px;

  input[type="checkbox"] {
    appearance: none;
    /*Showing the square*/
    font: inherit;
    color: #cf7b7b;
    width: 25px;
    height: 25px;
    border: 2px solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    rgba(235, 227, 227, 1);
    place-content: center;
    &:hover {
      color: lightgreen;
    }
  }
  /*Before shecked*/
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(1);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    background-color: lightgreen;
    color: lightgreen;
  }
`;
const Block = styled.section`
padding: 30px;
  min-height: 600px;
  background-color: rgba(235, 227, 227, 1);
  margin: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


  }

  `;
const H1 = styled.h1`
  margin: 40px;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const timestamp = new Date();
  const momentTimestamp = moment(timestamp).startOf("day").fromNow();

  console.log(momentTimestamp);

  return (
    <>
      <Header />
      <Block>
        <AddTodo />

        {items.length === 0 && (
          <>
            <H1 className="emptyList">All Done!!</H1>
            <iframe
              src="https://giphy.com/embed/xiEaqGsXOPRELmGFym"
              width="200"
              height="200"
              frameBorder="0"
              class="giphy-embed"
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/molangofficialpage-kawaii-molang-piupiu-xiEaqGsXOPRELmGFym"></a>
            </p>
          </>
        )}
        {items.map((item) => (
          <TodoForm key={item.id}>
            <p>{item.text}</p>
            <Label>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
            </Label>
            <ButtonTrash onClick={() => onDeleteTodoImmutability(item.id)}>
              <i className="far fa-trash-alt"></i>
            </ButtonTrash>
            {/* <p>{momentTimestamp}</p> */}
          </TodoForm>
        ))}
      </Block>
    </>
  );
};

export default TodoList;
