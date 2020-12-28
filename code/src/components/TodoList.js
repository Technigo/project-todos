import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

import TodoInput from './TodoInput';
import Item from './Item';
import todos from 'reducers/todos';
import { ListContainer, SummaryContainer, Summary, RemoveAllButton } from 'styling/TodoListStyling';

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
                dispatch(todos.actions.removeAll());
            }
        }); 
    };

    return (
        <>
            <TodoInput />
            <ListContainer>
                {items.map((item) => (
                    <Item 
                        key={item.id} 
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



