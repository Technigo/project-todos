import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos';
import CustomCheckBox from 'components/CustomCheckbox';

const ItemList = styled.li`
    font-size: 25px;
    color: black;
    background-color: pink;
    align-self: flex-start;
    padding: 10px;
    width: 75%;
    margin: 5px;
    display: flex;
    justify-content: space-between;

@media (min-width: 768px) {
    margin-left: 11%;
}
`;

const RemoveItemButton = styled.button`
    margin: 5px;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const Item = ({ id, item, isComplete }) => {

    const dispatch = useDispatch();

    const onCheckBoxClick = () => {  
        dispatch(todos.actions.changeItem({id}))
    }

    const onItemDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    return (
        <ItemList>
             <CustomCheckBox 
                isChecked={isComplete} 
                onChangeHandler={onCheckBoxClick}/>
             {item}
             <RemoveItemButton onClick={onItemDelete}>
                   <span>🗑</span> 
            </RemoveItemButton>
        </ItemList>
    );
};

export default Item;

