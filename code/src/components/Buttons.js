import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

//a reducer required for sending info via dispatch
import todos from "../reducers/todos";

//Styled component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);


  .date {
    margin:10px auto;
    font-weight: bolder;
    font-family: "Indie Flower", cursive;
    color: #b35900;
  }

  .amount-task,
  .completed-task {
    font-weight: bolder;
    font-family: "Indie Flower", cursive;
  }

  .amount-task,
  .completed-task {
    color: rgb(0, 30, 108);
  }

  .complete-btn,
  .remove-btn {
    background-color:  #b35900;
    color:whitesmoke;
    padding: 5px 10px;
    margin: 10px 10px 20px;
    border: none;
    cursor: pointer;
  }

  .remove-btn {
      background-color: rgb(0, 30, 108);
  }

  .complete-btn:hover { 
      background-color:rgb(0, 30, 108);
      color:#ff9933;
      transition: all 0.3s ease;
      transform: scale(1.1, 1.2);
  }

  .remove-btn:hover {
      background-color: #b35900;
      color: #00ccff;
      transition: all 0.3s ease;
      transform: scale(1.1, 1.2);
  }

`;

const Buttons = () => {
  //dispatches actions and trigger state changes to the store
  const dispatch = useDispatch();

  //useSelectors here
  const amountTasks = useSelector((store) => store.todos.items.length);
  const completedTasks = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );

  return (
    <Container>
      <h2 className="date">{moment().format("Do MMMM YY")}</h2>

      <p className="amount-task">Tasks to do: {amountTasks}</p>
      <p className="completed-task">Tasks completed: {completedTasks}</p>

      <div className="buttons-container">
        <button
          className="complete-btn"
          onClick={() => dispatch(todos.actions.completeAllTasks())}>
          Complete All
        </button>

        <button
          className="remove-btn"
          onClick={() => dispatch(todos.actions.removeAllTasks())}>
          Remove All
        </button>
      </div>
    </Container>
  );
};
export default Buttons;
