import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import swal from 'sweetalert';

import TodoInput from './TodoInput';
import Item from './Item';
import todos from 'reducers/todos';

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;

@media (min-width: 768px) {
    justify-content: center;
}
`;

const SummaryContainer =styled.div`
    display: flex;
    flex-direction: column;

@media (min-width: 768px) {
   align-items: center;
}
`;
const Summary = styled.p`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;

const RemoveAllButton = styled.button`
    font-size: 15px;
    width: 90px;
    height: 30px;
    border: 1px solid black;
    padding: 3px;
    background-color: yellow;
    color: red;
    cursor: pointer;

@media (min-width: 768px) {
    width: 150px;
    height: 50px;
}
`

const TodoList = () => {
    const dispatch = useDispatch();

    const items = useSelector(store => store.todos.items);

    const finishedTasks = items.filter((item => item.isComplete));

    const onRemoveAll = () => {
        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to remove all?',
            buttons: true,
            dangerMode: true
        })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(todos.actions.removeAll())
            }
        }) 
    }

        return (
            <>
                  <TodoInput />
                  <ListContainer>
                    {items.map((item) => (
                        <Item key={item.id} 
                            item={item.text} 
                            id={item.id}
                            isComplete={item.isComplete}
                        />
                    ))}
                    <SummaryContainer>
                        <Summary>Finished: {finishedTasks.length} / {items.length} tasks</Summary>
                        <RemoveAllButton onClick={onRemoveAll}>Remove all</RemoveAllButton>
                    </SummaryContainer>
                </ListContainer>
            </>
        );
    };

export default TodoList;



