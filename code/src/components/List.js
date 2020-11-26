import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Item } from "./Item.js";

const ListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column; 
    padding: 0px;
`;

export const List = () => {
    const items = useSelector(store => store.todos.items)

    return (
        <ListContainer>
            {items.map((item, id) => (
                <Item key={id} item={item}></Item>
            ))}
        </ListContainer>
    )
}