import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js"
import { CustomCheckbox } from "lib/CustomCheckbox.js";
import styled from 'styled-components'


export const TodoItem = ({ itemIndex }) => {
    const item = useSelector((store) => store.todos.list.items[itemIndex]);

    const dispatch = useDispatch();

    const handleOnChange = (e) => {

        dispatch (
            todos.actions.setDone({
                itemIndex: itemIndex,
                done: !item.done,
            })
        );
    };

    const onRemoveClicked = (e) => {

        dispatch (
            todos.actions.removeTodo({
                itemIndex,
            })
        );
    };

    return (

        <ItemArea>

       
            <Item>
            <CustomCheckbox 
            isChecked={item.done ? "checked" : ""}
            onChangeHandler={handleOnChange}
            /> 
            <Itemtext>{item.description}</Itemtext>
            </Item>
           
     
         
            <a href="/#"  className="todo-remove" onClick={onRemoveClicked}>
                [remove]
            </a>

        </ItemArea>


    )

}

const ItemArea = styled.div `
     text-align: center;
    
`

const Item = styled.div `
     display: flex;
     justify-content: center;
     margin-top: 20px;
     width: 30%px;

`

const Itemtext = styled.text`
    padding-left: 10px;

`



