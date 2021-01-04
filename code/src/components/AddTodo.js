import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import Container from '@material-ui/core/Container';
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
        marginTop: 20
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
    const [value] = useState('');
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const classes = useStyles();

    const editItem = () => {
        dispatch(todos.actions.editItem(title))
    }

    const addItem = () => {
        dispatch(todos.actions.addItem(title));
    }
    
    const handleChange = (e) => {
        const title = e.target.value;
        setTitle(title);
        if(title.length === 0) {
            setError("Please enter title");
        } else {
            setError("");
        }
    }


    const handleSubmit = () => {
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
        <Container maxWidth="sm" className={classes.root}>
            <TextField 
                rows="2"
                id="standard-required" 
                title={value}
                onChange={handleChange}
                // eslint-disable-next-line
                error={!!error} helperText={error} id="outlined-basic" fullWidth label="Figma and chill" multiline variant="outlined" 
            />
            <Button 
            className={classes.button}
            variant='contained' 
            color='primary'
            onClick={handleSubmit}>
                Add
            {/* {edit ? "Edit" : "Add"} */}
            </Button>
        </Container>
    );
}; 

export default Form;

