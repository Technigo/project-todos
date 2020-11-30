import React from 'react' 
import { useSelector } from 'react-redux';


export const TodoSummary = () => {
    //Get information from list from the store
    const list = useSelector(store => store.todos.list);

    //Using filter to count the number of tasks that are done 
    const finishedTodos = list.items.filter(item => item.isComplete).length;

    return (
        <div>
            <h2>{finishedTodos}/{list.items.length} tasks complete</h2>
        </div>
    )
}