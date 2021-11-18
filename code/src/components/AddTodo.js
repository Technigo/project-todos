import React, { useState } from "react";
import { useDispatch } from "react-redux"; //always
import styled from "styled-components";
import moment from "moment";

import todos from "../reducers/todos"; //always

const MainSection = styled.section`
  min-width: 250px;
  @media (min-width: 768px) {
    width: 500px;
  }
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  /* opacity: 0.7; */
  color: #8fc9a3;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

const TextInput = styled.input`
  margin: 0;
  /* opacity: 0.7; */
  border: solid #8fc9a3;
  border-radius: 5px;
  padding: 10px;
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
    <MainSection>
      <h1>
        Today <span>{moment().format("ddd D MMM")}</span>
      </h1>
      <Container>
        <TextInput
          type="text"
          value={input}
          placeholder="Add tasks here..."
          onChange={(event) => setInput(event.target.value)}
        />
        <Button onClick={onTodoAdd}>
          <i class="fas fa-plus"></i>
        </Button>
      </Container>
    </MainSection>
  );
};

// onClick={() => dispatch(todos.actions.addTodo())}

export default AddTodo;
