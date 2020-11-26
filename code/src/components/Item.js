import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { todos } from 'reducers/todos';
import { Link } from 'react-router-dom';
import {TimeAgo} from './TimeAgo';
import { ListItem } from '../lib/ListStyle';
import { TimeText } from '../lib/ItemStyle';


export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const onItemRemove = id => {
        dispatch(todos.actions.removeItem(id));
    }
    console.log("item created at " +item)
    return (
        <ListItem>
            <TimeText>
           <TimeAgo createdAt={item.createdAt} >
               {item.createdAt}
            </TimeAgo>
            </TimeText>
            {item.title}
            <Link to={`/todo/${item.id}`}>View</Link>  
            <button onClick={() => onItemRemove(item.id)} >Delete</button>
        </ListItem>
    )
};