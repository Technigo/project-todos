import React from 'react'
import TodoCard from "./TodoCard"

const TodoList = () => {

    //Map over each item in the array to display the desciption: 

    return (

            <div>
                {items.map(todo => 
                <TodoCard todo={todo}></TodoCard>
                )}
            </div>
    )
}

export default TodoList
