import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import todos from "reducers/todos";

const ListItems = styled.div`
  width: 270px;

  div {
    width: 260px;
    background-color: ${(props) => props.theme.listItemBackground};
    margin: 10px 0;
    padding: 5px;
    border-radius: 10px;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.titleColor};
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  input {
    border: 1px solid ${(props) => props.theme.buttonBackground};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    background-color: white;
    margin: 3px;
  }

  button {
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.listItemBackground};
    border: none;
    border-radius: 50%;
    font-weight: bold;
    width: 25px;
    height: 25px;
    padding: 5px;
  }

  button:hover {
    cursor: pointer;
    color: white;
    transition: 0.1s;
  }

  h3,
  p {
    color: ${(props) => props.theme.listItem};
    margin: 5px 5px;
  }

  .done {
    text-decoration: line-through;
    color: ${(props) => props.theme.listItemDone};
    text-decoration-thickness: 3px;
  }

  p {
    font-size: 10px;
  }

  input :checked {
    background-color: #2196f3;
  } */
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.detleteTodo(id));
  };

  return (
    <ListItems>
      {items.map((item) => (
        <div key={item.id}>
          <section>
            <label>
              <h3 className={item.isComplete ? "done" : "not-done"}>
                {item.text}
              </h3>

              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
            </label>
          </section>
          <section>
            <p>{moment().format("MMM Do YY")}</p>
            <button onClick={() => onDeleteTodo(item.id)}>X</button>
          </section>
        </div>
      ))}
    </ListItems>
  );
};

export default TodoList;
