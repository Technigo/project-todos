import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AddTaskButton from "./AddTaskButton";
import AddTaskInput from "./AddTaskInput";
// importing store required for sending info via dispatch
import todos from "../../reducers/todos";

//Styled component
const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 550px;
  }
`;

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch(); // sends the info to the reducers

  // Function for sending the input's value to the addTodo reducer.
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(task)); //input replaces the action parameter
    setTask(""); //clears the input
  };
  //Function for storing the user's task inside the input state
  const onSetTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <InputWrapper>
      <AddTaskInput taskValue={task} onSetTaskFunction={onSetTask} />
      <AddTaskButton onAddTodoTask={onAddTodo} />
    </InputWrapper>
  );
};

export default AddTask;
