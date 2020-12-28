import React from 'react';
import { useDispatch } from 'react-redux';

import todos from 'reducers/todos';
import CustomCheckBox from 'components/CustomCheckbox';
import { ItemList, RemoveItemButton } from 'styling/ItemStyling';

const Item = ({ id, item, isComplete }) => {

    const dispatch = useDispatch();

    const onCheckBoxClick = () => {  
        dispatch(todos.actions.changeCompleteStatus({id}));
    };

    const onItemDelete = () => {
        dispatch(todos.actions.removeItem(id));
    };

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

