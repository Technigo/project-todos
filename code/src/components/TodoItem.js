
import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'lib/Button';
import { CustomCheckbox } from './CustomCheckbox';
import { todos } from '../reducers/todos';
import styled from 'styled-components'


export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  background:#fff;
  margin-top: 20px;
  font-size: 18px;
  padding: 10px;
  border: solid 2px #786253;
  box-shadow: 8px 5px;
  border-radius: 5px;
  width: 400px;
  height: auto;
  margin: 6px 25px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
`;




export const TodoItem = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();
    

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (

        <ItemList>
                 <CustomCheckbox checked={isCompleted}/>
                 <div>{name}</div>
                <Button  onClick={onTodoDelete}>Done it</Button>
        </ItemList>
    
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