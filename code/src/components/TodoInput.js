import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import styled from "styled-components";
import { PrimaryButton } from "lib/PrimaryButton";
import DatePicker from "react-date-picker";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    //inputValue !== "" removes possibilty to add empty todo
    if (inputValue !== "") {
      e.preventDefault();
      const date = new Date();
      const currentDate = date.getTime();
      dispatch(
        todos.actions.addTodo({
          description: inputValue,
          done: false,
          date: currentDate,
          display: true,
          dueDate: dueDate,
        })
      );
      setInputValue("");
      setDueDate("");
    }
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Let's get some tasks done!"
        ></Input>
        <DatePickerBackground>
          <DatePicker
            onChange={(date) => setDueDate(date)}
            value={dueDate}
            style={{ background: "white" }}
          />
        </DatePickerBackground>
        <PrimaryButton type="submit" value="ADD TODO"></PrimaryButton>

        {/* <Wrapper> */}
      </Form>
      {/* <Text>Adding a due date is optinal</Text> */}
      {/* </Wrapper> */}
    </>
  );
};

const Input = styled.input`
  border-radius: 5px;
  border: none;

  margin: 0 5px;
  padding: 0 5px;
  width: 150px;
  height: 30px;

  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 300px;
  margin-bottom: 15px;

  @media (max-width: 668px) {
    flex-direction: column;
    margin: 0 10px;
    height: 130px;
    width: 150px;
  }
`;

const DatePickerBackground = styled.div`
  background: white;
`;

// const Text = styled.p`
//   font-family: "Pangolin", cursive;
//   color: #fff;
//   font-weight: lighter;
//   font-size: 20px;

//   margin: 0;
// `;

// const Wrapper = styled.div`
//   display: flex;

//   @media (max-width: 668px) {
//     flex-direction: column;
//   }
// `;
