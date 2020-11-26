import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos';
import CustomCheckBox from 'components/CustomCheckbox';


const ItemList = styled.li`
    font-size: 25px;
    color: gray;
    background-color: pink;
    align-self: flex-start;
    padding: 10px;
    width: 75%;
    margin: 5px;
`;

const RemoveItemButton = styled.button`
    color: gray;
    margin: 5px;
`;

const Item = ({ id, item, isComplete }) => {

    const dispatch = useDispatch();

    const onCheckBoxClick = () => {  
        dispatch(todos.actions.changeItem(id))
    }

    const onItemDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    return (
        <ItemList>{item}
             <RemoveItemButton onClick={onItemDelete}>
                    🗑
            </RemoveItemButton>
            <CustomCheckBox isChecked={isComplete} onChangeHandler={onCheckBoxClick}/>
               
        </ItemList>
    )
};

export default Item;

