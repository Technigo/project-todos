import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { list } from 'reducers/list'
// import { Todo } from 'components/Todo'
// import { Form } from 'components/Form'


//Listed todos +  tick box and remove button
export const TodoList = () => {
    const allTodos = useSelector((store) => store.list.todos);
    const dispatch = useDispatch()

    return (
        <div>
            {allTodos.map((todo, todoIndex) => (
                <div key={todo.id} todo={todo}> 
                    <div>{todo.title} </div>
                    <input type="checkbox" onChange={() => dispatch(list.actions.toggleTodo(todo))} />
                    <button type="button" onClick={() => dispatch(list.actions.removeTodo(todo, todoIndex))}>-</button>
                </div>
                
                    
            ))}
        </div>
    )
}


// The tick box and remove button
// export const RemoveTodo = ({ todo }) => {
//     const dispatch = useDispatch()

//     return (
//         <div> 
//             <div> {todo.title} </div>
//             <input type="checkbox" onChange={() => dispatch(list.actions.toggleTodo(todo))} />
//             <button type="button" onClick={() => dispatch(list.actions.removeTodo(todo))}>-</button>
//         </div>
//     )
// }

