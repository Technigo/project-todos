import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const ListItems = styled.div`
  width: 270px;

  div {
    width: 270px;
    background: lightpink;
    padding-bottom: 20px;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  /* label {
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
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #eee;
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
            <h3>{item.text}</h3>
            <label>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span></span>
            </label>
          </section>
          <section>
            <textarea rows="2" name="comments"></textarea>
            <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
          </section>
        </div>
      ))}
    </ListItems>
  );
};

export default TodoList;
