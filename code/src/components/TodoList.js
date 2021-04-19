import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';


import todos from '../reducers/todos'
import { Checkbox } from '@material-ui/core';


  
function TodoList() {
    //A useSelector so we can reach for the items array in the todo's store
    //Reaching for the store(reducer), then the todos, then the items 
    const items = useSelector((store) => store.todos.items)

    //To be able to dispatch the action (changes) we want to do with the todos, we need to create dispatch hook

    const dispatch = useDispatch()

    //Map over each item in the array to display the desciption: 
    console.log(items)
    return (
        <div>
            {items.map(todo => 
            <ListItem key={todo.id}>
                 <Checkbox
                    type="checkbox"
                    checked={todo.isComplete}
                    //Dispatch, enables us to send an action toogle with an argument(the id of the task), to update the store
                    onChange={() => dispatch(todos.actions.toggleDone(todo.id))}
                />
                <p>tasks: {todo.description}</p>
                <DeleteIcon />
            </ListItem>
            )}
            hej
        </div>
    )
}

export default TodoList
