import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// to trigger the action onclick we have to import { useDispatch } from "react-redux";
import tasks from "reducers/tasks";

const AddTaskContainer = styled.section`
    border: 2px solid orange;
    /* margin: 20px auto;
    min-height: 100px;
    width: 90%;
    display: flex;
    align-items: center; */
  `


const AddTasks = () => {
  const [input, setInput] = useState ('')

  const dispatch = useDispatch();

  const onAddTasks = () => {
    dispatch(tasks.actions.addTasks(input));
    // could have been written below but too much code
  };

  
  return(
    <AddTaskContainer>
      <input 
        type="text" 
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />
      <button onClick={onAddTasks}>Add task</button>
    </AddTaskContainer>
    );
};

export default AddTasks;