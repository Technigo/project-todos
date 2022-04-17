import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "../reducers/store";

const AddTodoSection = styled.section`
  min-width: 250px;
  @media (min-width: 768px) {
    width: 500px;
  }
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
  margin-top: 45px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  background-image: url(../assets/add-btn-1.png);
`;

const TextInput = styled.input`
  border: solid #004aad;
  border-radius: 10px;
  padding: 10px;
  margin: 0 20px;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState(""); //initialized with empty string

  // Always have to create an instance for dispatch
  const dispatch = useDispatch();

  const onTodoAdd = () => {
    dispatch(todos.actions.addTodo(input)); //input = payload
    setInput("");
  };

  return (
    <AddTodoSection>
      <TextInput
        type="text"
        value={input}
        placeholder="What should we tackle next?"
        onChange={(event) => setInput(event.target.value)}
      />
      <Button onClick={onTodoAdd}>
        {" "}
        <img
          src="https://i.ibb.co/vxPGLtw/Untitled-design-11.png"
          alt="Add todo button"
          width="35px"
          height="35px"
        />
      </Button>
    </AddTodoSection>
  );
};

// onClick={() => dispatch(todos.actions.addTodo())}

export default AddTodo;
