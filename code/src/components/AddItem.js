import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";

const AddItemBtn = styled.button`
    align-self: center;
    padding: 8px;
    margin: 2px;
    font-size: 22px;
    color: black;
    border-radius: 25px;
    background-color: #25e025;
    box-shadow: 0 16px 32px 0;
    &:hover {
        background-color:  #2a772a;
        box-shadow: none;
  }
`;

const Input = styled.input`
    height: 40px;
    margin-bottom: 20px;
    border-radius: 6px;
`;

export const AddItem = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleAddItem = () => {
        dispatch(todos.actions.addItemFunc(value));
        setValue("");
    }

    return (
        <>
            <Input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <AddItemBtn onClick={handleAddItem}>Add Item</AddItemBtn>
        </>
    );
};