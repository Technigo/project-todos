import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import  NoteAddIcon from '@material-ui/icons/NoteAddRounded';
import { Link } from 'react-router-dom';
import { Item } from './Item.js';
import { TimeAgo } from './TimeAgo';
import { todos } from 'reducers/todos';

const TodoListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
`

const TodoListActionButton = styled.button`
    align-self: center;
    padding: 4px;
`

export const TodoList = () => {

    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items)
//    const form = useSelector((store) => store.todos.form);  
 

     
    return (
        <TodoListContainer>
            <Link to={`/todo/`}>
                <NoteAddIcon></NoteAddIcon>
            </Link>  

            {/* <TodoListActionButton onClick={() => dispatch(todos.actions.goToForm())}>
                
            </TodoListActionButton> */}

           
            {items.map((item) => (
                <div>
              <Item key={item.id} item={item}></Item>
              </div>

              ))}  
            
    
        </TodoListContainer>
    );
};