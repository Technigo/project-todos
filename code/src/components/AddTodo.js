import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../reducers/todos";
import styled from "styled-components";
import plusIcon from "../assets/plus-icon.svg";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 90vw;
  top: 28vh;
  left: 5vw;
  z-index: 1;
  row-gap: 5px;
  @media (min-width: 768px) {
    top: 32vh;
  }
  @media (min-width: 992px) {
    top: 30vh;
  }
`;

const StyledInput = styled.input`
  height: 35px;
  width: 50vw;
  font-family: "Spartan", sans-serif;
  color: #4a4737;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #4a473700;
  ::placeholder {
    color: #4a4737ad;
    text-align: center;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #4a4737;
  }
  @media (min-width: 768px) {
    ::placeholder {
      font-size: 18px;
    }
  }
  @media (min-width: 992px) {
    ::placeholder {
      font-size: 20px;
    }
  }
`;

const AddTodoButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  transition: 0.5s ease-in-out;
  :hover:enabled {
    transform: scale(1.1);
  }
`;

const AddTodoIcon = styled.img`
  width: 50px;
  @media (min-width: 992px) {
    width: 70px;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo(input));
    return setInput("");
  };

  return (
    <StyledForm>
      <StyledInput
        placeholder="+ Add Task"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTodoButton disabled={!input} onClick={onAddTodo}>
        <AddTodoIcon src={plusIcon} />
      </AddTodoButton>
    </StyledForm>
  );
};

export default AddTodo;
