import React, { useState } from "react"
import {useSelector} from "react-redux"
import {Item} from "components/Item"
import {Select} from "library/Select"
import {ToDo}from "reducers/toDo"
import { Main } from "./AddItemForm"
import styled from "styled-components/macro"

export const ItemList = () => {
    const [category, setCategory] = useState ("")
    const items = useSelector((state) => {
    if (!category) return state.ToDo.items
    else return state.ToDo.items.filter(item => item.category === category)
})

    return (
    <Main>
    <label>
        Show by category:
    <Select
        value= {category}
        onChange= {(event) => setCategory(event.target.value)}>
            <option value = "">Show all</option>
            <option value = "play">Play</option>
            <option value = "work">Work</option>
        </Select>
    </label>
        <Ul>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </Ul>
    </Main>
    )
}

const Ul = styled.ul`
width: 80%;
display: flex;
flex-direction: column;
align-self: center;
padding-inline-start: 0;
`;

