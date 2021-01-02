import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
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
    button: {
        marginTop: 16
    }
  }));

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: left;
// align-items: center;
// padding: 0.5em;
// margin-top: 100;
// `

const Form = ({ edit }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const classes = useStyles();
    
    const handleChange = (e) => {
        const title = e.target.value;

        setTitle(title);
        if(title.length === 0) {
            setError("Please enter title");
        } else {
            setError("");
        }
    }

    const editItem = () => {
        dispatch(todos.actions.editItem(title))
    }

    const addItem = () => {
        dispatch(todos.actions.addItem(title));
    }

    const handleClick = () => {
        if(title.length === 0){
            setError("Please enter title");
            return;
        }
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="standard-required" 
                title={value}
                onChange={handleChange}
                error={!!error} helperText={error} id="outlined-basic" fullWidth label="Figma and chill" multiline variant="outlined" 
            />
            <Button 
            className={classes.button}
            variant='contained' 
            color='primary'
            onClick={handleClick}>
            {edit ? "Edit" : "Add"}
            </Button>
            </form>
        </>
    );
};

export default Form;

