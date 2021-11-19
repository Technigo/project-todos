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
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid ${(props) => props.theme.buttonBackground};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    background-color: white;
    margin: 0;
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

  p {
    font-size: 10px;
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
      {items
        // .sort(
        //   (a, b) => a.isComplete(item.isComplete === true),
        //   b.isComplete(item.isComplete === false)
        // )
        .map((item) => (
          <div key={item.id}>
            <section
            // style={{
            //   textDecoration: item.isComplete ? "line-throught" : "",
            // }}
            >
              <label>
                <h3
                  style={{
                    textDecoration: item.isCorrect ? "line-through" : "",
                  }}
                  // clasName="todo"
                  // style={{
                  //   textDecorationLine: item.isComplete ? "line-throught" : "",
                  // }}
                >
                  {item.text}
                </h3>

                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                  // style={{
                  //   textDecorationLine: item.isComplete ? "line-throught" : "",
                  // }}
                />
              </label>
            </section>
            <section>
              {/* moment().calendar() 
            moment().format("MMM Do YY")*/}
              <p>{moment().format("MMM Do YY")}</p>
              {/* <textarea rows="2" name="comments"></textarea> */}
              <button onClick={() => onDeleteTodo(item.id)}>X</button>
            </section>
          </div>
        ))}
    </ListItems>
  );
};

export default TodoList;
