import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TextField from '@material-ui/core/TextField';

import { todos } from '../reducers/todos';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

const ToDoItem = ({ id, title, createdAt, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };
    return (
        <Container>
            <TextField 
                id="filled-read-only-input"
                label={createdAt}
                defaultValue={title}
                variant='filled'
                color='secondary'
                >
             </TextField >
            <IconButton 
            aria-label="buttons" 
            onClick={onIsCompletedChange}>
                {isCompleted ? <CheckCircleOutlineIcon  fontSize="large" color="primary"/> : <AnnouncementIcon fontSize="large" color="secondary"/> }
            <DeleteIcon 
            fontSize="large" 
            onClick={onTodoDelete} />
            </IconButton>
        </Container>
    );
};

export default ToDoItem;

