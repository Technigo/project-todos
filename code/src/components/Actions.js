import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";
import goodjob from "../assets/goodJob.png";

const Buttons = styled.button`
    padding: 8px;
    margin: 15px;
    font-size: 20px;
    color: black;
    border-radius: 25px;
    background-color: #2caf2c;
    box-shadow: 0 16px 32px 0;
    align-self: flex-end;
    &:hover {
        background-color: #185f18;
        box-shadow: none;
  }
`;

const Img = styled.img`
    width: 100%;
`;

const DeleteAllButton = styled(Buttons)`
    background-color: #ff0000c9;
    &:hover {
        background-color:  #961111;
    }
`;

export const Actions = () => {
    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items)

    const handleAllDone = () => {
        dispatch(todos.actions.setAllDone());
    }

    const handleAllUndone = () => {
        dispatch(todos.actions.setAllUndone());
    }

    const handleDeleteAll = () => {
        dispatch(todos.actions.deleteAll());
    }

    return (
        <>
            <Buttons onClick={handleAllDone}>Mark as all done</Buttons>
            {!items.filter(item => !item.checked).length &&
                <Img src={goodjob} alt="Good job smile" />
            }
            <Buttons onClick={handleAllUndone}>Mark as all undone</Buttons>
            <DeleteAllButton onClick={handleDeleteAll}>Delete All items</DeleteAllButton>
        </>
    )
}