import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";
import tasks from "reducers/Tasks";
import "../index.css";


const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Container = styled.div`
  width: 375px;
  margin: 0;
  @media ${devices.tablet} {
    width: 768px;
  }
  @media ${devices.desktop} {
    width: 1025px;
  }
`;



const AddTask = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uniqid(),
      task: inputValue,
      isDone: false,
    };

    dispatch(tasks.actions.addTask(newTask));

    setInputValue("");
  };

  return (
    <Container>
      <h1>My Todo List</h1>
      <form onSubmit={onFormSubmit} className="form-inline mt-3 mb-3">
        <label className="sr-only">
          <input
            className="form-control mb-2 mr-sm-2"
            placeholder="Add todo..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary mb-1" disabled={inputValue === ""}>
          <span role="img" aria-label="add" mr-2>
          ➕
          </span>
        </button>
      </form>
      </Container>
  );
};

export default AddTask;
