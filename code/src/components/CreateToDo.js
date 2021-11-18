import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const StyledContainer = styled.div`
    width: 320px;
    margin: auto;

`

const CreateToDo = () => {
    const [toDoText, setToDoText] = useState("");

    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setToDoText(e.target.value);
    };

    const onCreateNew = () => {
        dispatch(todos.actions.createToDo(toDoText));
    };
    return (
        <StyledContainer>
            <input
                type="text"
                value={toDoText}
                onChange={onInputChange}
                placeholder="new To Do item"
            ></input>
            <button onClick={onCreateNew} disabled={toDoText === ""}>
                Create new To-Do item
            </button>
        </StyledContainer>
    );
};

export default CreateToDo;
