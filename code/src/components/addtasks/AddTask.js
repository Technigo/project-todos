import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// importing components
import AddTaskButton from "./AddTaskButton";
import AddTaskInput from "./AddTaskInput";
import AddCategory from "./AddCategory";
// importing store required for sending info via dispatch
import todos from "../../reducers/todos";

//Styled component
const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 550px;
  }
`;

const AddTask = () => {
  const dispatch = useDispatch(); // sends the info to the reducers

  // Local state
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Other");

  // Function for sending the task and category's value to the addTodo reducer.
  const onAddTask = () => {
    dispatch(
      todos.actions.addTodo({
        task: task,
        category: category,
      })
    );
    setTask(""); //clears the input field
  };

  //Function for storing the user's task inside the task state variable
  const onSetTask = (e) => {
    setTask(e.target.value);
  };

  //Function for storing the category value inside the category state variable
  const onAddCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <AddCategory onAddCategory={onAddCategory} category={category} />

      <InputWrapper>
        <AddTaskInput taskValue={task} onSetTaskFunction={onSetTask} />
        <AddTaskButton onAddTodoTask={onAddTask} />
      </InputWrapper>
    </>
  );
};

export default AddTask;
