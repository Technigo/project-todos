import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import Clear from '@material-ui/icons/Clear';


import todos from '../reducers/todos';

const style = { color: '#FFC700', fontSize: '1.5em' };
const otherStyle = { color: 'white', fontSize: '1.5em' };

const TodosList = () => {
    const tasks = useSelector((store) => store.todos.tasks); 
    const completedTasks = tasks.filter(singleTask => singleTask.isComplete);

    console.log(completedTasks);

    const dispatch = useDispatch();

    return (
        <Main className="tasks-container">
           <Title>Completed Tasks: {completedTasks.length}/{tasks.length}</Title>
            {tasks.map(singleTask => (
                <CheckboxWrapper key={singleTask.id} className="checkbox-container">
                    <Checkbox
                        icon={<StarBorder style={style} />}
                        checkedIcon={<Star style={style} />}
                        type="checkbox"
                        checked={singleTask.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(singleTask.id))}
                    />
                    <Text>{singleTask.description}</Text>
                    <IconButton onClick={() => dispatch(todos.actions.removeTodo(singleTask.id))}>
                    <Clear style={otherStyle} />
                    </IconButton>
                </CheckboxWrapper>
            ))}
        </Main>
    )
};

export default TodosList;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #2EC4B6;
    width: 100%;
    height: 100vh;
    padding: 20px;
    z-index: 1;
    @media (min-width: 768px) {
        padding: 20px 26px;
    }
   
`
const Title = styled.h1`
    margin: 0;
    color: white;
    font-size: 22px;
    font-weight: 400;
    @media (min-width: 768px) {
        font-size: 28px;
    }
`
const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    border-bottom: 3px solid white;
    margin-top: 2rem;
`
const Text = styled.p`
    margin: 0 0 8px 0;
    width: 100%;
    word-wrap: break-word;
    text-align: left;
    color: white;
    font-size: 20px;
    @media (min-width: 768px) {
        font-size: 28px;
    }
`