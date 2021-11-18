import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";
import Checkbox from "./Checkbox";

const StyledContainer = styled.div`
    width: 320px;
    margin: auto;
    background-color: #F0F0F0;
`;

const StyledToDoItem = styled.div`
    border-bottom: solid #B5B5B5 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 10px;
`;

const StyledTaskText = styled.p`
flex-grow: 1;
`
const StyledButton = styled.button`
    box-shadow:inset 0px 1px 0px 0px #f5978e;
	background:linear-gradient(to bottom, #f24537 5%, #f7a49c 100%);
	background-color:#f24537;
	border-radius:6px;
	border:1px solid #d02718;
	display:inline-block;
	color:#ffffff;
	font-size:15px;
	font-weight:bold;
	padding:6px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;

    &:hover {
        background:linear-gradient(to bottom, #f7a49c 5%, #f24537 100%);
	background-color:#f7a49c;
    }

    &:active {
        position:relative;
	top:1px;
    }
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
                    <StyledButton
                        onClick={() => {
                            onDelete(item.id);
                        }}
                    >
                        Delete
                    </StyledButton>
                </StyledToDoItem>
            ))}
        </StyledContainer>
    );
};

export default ToDoList;
