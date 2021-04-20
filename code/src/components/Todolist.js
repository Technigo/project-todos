import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todos from '../reducers/todos'

import Header from 'components/Header'
import Footer from 'components/Footer'


const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const wholeStore = useSelector((store) => store)

    const dispatch = useDispatch()


    return (
        <>
        <Header />
        <div>
        {items.map(todo => (
            <div className="container" key={todo.id}>
                <p>{todo.description}</p>
                <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                />
                </div>                
        ))} 
        </div>
        <Footer />
        </>
        
    )
}

export default TodoList