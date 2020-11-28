
import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'lib/Container';
import { Button } from 'lib/Button';
import { CustomCheckbox } from './CustomCheckbox';
import { todos } from '../reducers/todos';
import styled from 'styled-components'


export const TodoItem = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (

        <Container>
        <div>{name}</div>
                 <CustomCheckbox checked={isCompleted}/>
                <Button  onClick={onTodoDelete}>Remove</Button>
        </Container>
    
    );
}






// return (
//     <Container>
//         <div>
//           <div>
         
//         <div>{name}</div>
//             <div onClick={onIsCompletedChange}>
//                 {isCompleted ? "☑️" : "🔲 "}
//                 <Button onClick={onTodoDelete}>Remove</Button>
//             </div>
//             </div>
//         </div>
//         </Container>
//     );