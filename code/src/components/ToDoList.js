import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";
import Checkbox from "./Checkbox";

const StyledContainer = styled.div`
    width: 320px;
    margin: auto;
`;

const StyledToDoItem = styled.div`
    border-bottom: solid gray 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const StyledTaskText = styled.p`
flex-grow: 1;

`

const ToDoList = () => {
    const allTodos = useSelector((state) => state.todos.items);

    const dispatch = useDispatch();

    const onCompletedToggle = (id) => {
        dispatch(todos.actions.toggleCompleted(id));
    };

    const onDelete = (id) => {
        dispatch(todos.actions.deleteToDo(id));
    };

    return (
        <StyledContainer>
            <h2>All tasks</h2>
            {allTodos.map((item) => (
                <StyledToDoItem key={item.id}>
                    <label>
                        <Checkbox
                            checked={item.isComplete}
                            onChange={() => {
                                onCompletedToggle(item.id);
                            }}
                        ></Checkbox>
                    </label>
                    <StyledTaskText>{item.text}</StyledTaskText>
                    <button
                        onClick={() => {
                            onDelete(item.id);
                        }}
                    >
                        Delete task
                    </button>
                </StyledToDoItem>
            ))}
        </StyledContainer>
    );
};

export default ToDoList;
