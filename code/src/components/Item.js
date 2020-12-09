import React from 'react';
import styled from 'styled-components';
import { CustomCheckbox } from 'Lib/CustomCheckbox';
import { todos } from 'reducers/todos';
import { useDispatch } from 'react-redux';
import { Button } from 'Lib/Button';

const ItemContainer = styled.div`
padding: 8px;
margin: 12px;
color: #3f3f3f;
background-color: #ffb6d3;
width: 230px;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: space-between;

@media (min-width: 667px){
    width: 350px;
  }
`;

const DescriptionContainer = styled.div`
display: flex;
align-items: center;
margin-left: 5px;
`;

const Description = styled.p`
font-size: 13px;
font-weight: bold;

@media (min-width: 667px){
    font-size: 16px;
  }
`;

export const Item = ({ item }) => {
    // Get the item from the store based on the index

    const dispatch = useDispatch();

    // Create the onchange handler for handling the done status
    const handleCheckboxClick = () => {
        dispatch(todos.actions.markCompleted(item.id));
    };

    // Create the onRemoveClicked handler
    const onRemoveClicked = () => {
        dispatch(todos.actions.removeTodo(item.id))
    };

    return (
        <ItemContainer>
            <DescriptionContainer>
                <CustomCheckbox
                    isChecked={item.complete}
                    onChangeHandler={handleCheckboxClick}
                />
                {item.complete ? <Description style={{ textDecoration: 'line-through', color: 'grey' }}>{item.task}</Description> : <Description>{item.task}</Description>}
            </DescriptionContainer>
            <Button onClick={() => onRemoveClicked(item.id)}> - </Button>
        </ItemContainer>

    );
};
