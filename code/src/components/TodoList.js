/* eslint-disable */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)
      
    let count = 0
    const dispatch = useDispatch()

    const onClickAllDone = () => {
        const userChoice = confirm("Are just lazy or you worked really hard? Confirm if everything is done")
        if (userChoice == true) {
            dispatch(todos.actions.allDone())        
        } else {
            alert("Ok, keep working hard ...  ⚒")

        }
    }
    
    return (
        <div>
            {items.map(todo => (
                <div key={todo.id} className="todo-items">
                    <div className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.isComplete}
                            
                            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                        />
                        <p className="task-description">{todo.description}</p>
                        
                        

                        <button className="btn-delete" onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                            <span className="trash-item">🗑</span>   
                        </button>  

                        
                        

                        <div className="counter">
                            {todo.isComplete ? count = count: count+=1}
                        </div>


                    </div>
                    

                    <div className ="time">
                        task created: {todo.timeCreated}
                    </div>


                </div>
            ))}

               
           

                    
                
            <p>SUMMARY</p>    
            <p>You have {items.length} tasks on your todo list</p>   
            <p><span>Tasks left: {count}</span></p>

            <button nameClass="all-done" onClick={onClickAllDone}>
                All Completed!
            </button>

        </div>
    )
}

export default TodoList
