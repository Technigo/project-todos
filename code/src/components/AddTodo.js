import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { todos } from '../reducers/todos';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex, column',
      },
    },
  }));

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: center;
padding: 0.5em;
margin-top: 100;
`

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const classes = useStyles();

    const onTodoAdd = () => {
        setValue('');
        dispatch(todos.actions.addItem(value));  
    }

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="standard-required" 
                label="Figma and chill" 
                defaultValue=""
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button 
            variant='outlined' 
            color='primary'
            onClick={onTodoAdd}>
                Add
            </Button>
            </form>
        </Container>
    );
};

export default AddTodo;

