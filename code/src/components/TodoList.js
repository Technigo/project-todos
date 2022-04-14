import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Need to import the slice from the reducer folder because its used in the onChange for checkboxes
import tasks from 'reducers/Tasks'


const TodoList = () => {
    const todoList = useSelector((store) => store.tasks.taskList)
    const dispatch = useDispatch()

    const onTodoToggle = (todoId) => {
        dispatch(tasks.actions.toggleTodo(todoId))
    }

    const onDeleteTodod = (index) => {
        dispatch(tasks.actions.deleteTodo(index))
    }

    return (
        <section>
            {todoList.map((todo, todoIndex) => (
                <article key={todo.id}>
                    <h3>{todo.name}</h3>
                    <label>
                        <span role='img' aria-label='checked'>Finished ✔</span>
                    <input 
                    type='checkbox'
                    checked={todo.isChecked}
                    onChange={() => onTodoToggle(todo.id)}
                    />
                    </label>
                    <button onClick={() => onDeleteTodod(todoIndex)}>
                        <span role='img' aria-label='delete'>❌</span>
                    </button>
                </article>
            ))}
        </section>
    )

}

export default TodoList

//To reach the toggleTodo we need to write dispatch(tasks.actions.toggleTodo()
// (todo.id) todo because when mapping each object is named todo
//Because there is a lot of code to pass in its easier/more clean to store it in a variable an pass that variable