import React from "react";
import { useDispatch } from "react-redux"
import styled from "styled-components";

import { todos } from "../reducers/todos"

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 20px;
`;

const Input = styled.input`
    margin-right: 15px;
`;
const RemoveItemButton = styled.button`
    align-self: center;
    padding: 8px;
    margin: 15px;
    font-size: 20px;
    color: black;
    border-radius: 25px;
    background-color: red;
    box-shadow: 0 16px 32px 0;
    &:hover {
        background-color:  #961111;
        box-shadow: none;
  }
`;

const ItemContainer = styled.div`
    border: 1px groove gray;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    border-radius: 6px;
    box-shadow: 5px 10px #888888;

    
`;


export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const handleDeleteItem = () => {
        dispatch(todos.actions.removeOne(item))
    }

    const handleChandeItem = () => {
        dispatch(todos.actions.changeItem(item))
    }

    return (
        <ItemContainer>
            <CheckboxContainer>
                <Input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleChandeItem}>
                </Input>
                <label>{item.text}</label>
            </CheckboxContainer>
            <RemoveItemButton onClick={handleDeleteItem}>Delete Item</RemoveItemButton>
        </ItemContainer>

    )
}