import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//a reducer required for sending info via dispatch
import todos from "../reducers/todos";

//Stlyed component
const Section = styled.section`
  display: flex;

  .list-container,
  .date-container,
  .buttons-container {
    display: flex;
    align-items: center;
    margin-top: 4px;
    padding: 5px;
  }

  .list-container {
    list-style-type: none;
    background-color: rgb(228, 216, 220);
    color: rgb(0, 30, 108);
    flex-grow: 1;
  }

  .date-container {
    padding: 5px 15px;
    color: #b35900;
    background-color: rgb(201, 204, 213);
  }

  .buttons-container {
    padding: 5px 15px;
    background-color: rgb(147, 181, 198);
  }

  .task {
    padding: 0 5px;
  }

  .trash-btn {
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    background-color: rgb(147, 181, 198);
    color: rgb(0, 30, 108);
  }

  .trash-btn:hover {
    color: rgb(253, 140, 4);
  }

  input[type="checkbox"] {
    cursor: pointer;
    font: inherit;
    width: 0.8em;
    height: 0.8em;
    margin-right: 10px;
  }
`;

const TodoList = () => {
  // This function is responsible for getting and rendering the tasks to do from the items array from the store
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch(); // sends the info to the reducers
  
  //input onChange function
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  //button onClick function
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {items.map((item, index) => (
        <Section>
          <ul className="list-container" key={item.id}>
            <li className="task">{item.task}</li>
          </ul>

          <div className="date-container">
            <p>{item.createdAt}</p>
          </div>

          <form className="buttons-container">
            <input
              className="check-btn"
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <button className="trash-btn" onClick={() => onDeleteTodo(item.id)}>
              <i class="fas fa-trash"></i>
            </button>
          </form>
        </Section>
      ))}
    </>
  );
};
export default TodoList;
