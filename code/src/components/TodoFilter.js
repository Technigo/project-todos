import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from 'reducers/reducer';
import TodoItem from './TodoItem';  

const mapStateToProps = (state) => {
    return{
        todos: state,
    }
}

const mapDispatchToProps = (dispatch) => { 
    return{
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
} 

const TodoFilter = (props) => {     
    const [sort, setsort] = useState("active") 

  return (
    <div className="displaytodos">
        <div className="buttons">
            <button onClick={()=>setsort("active")}>Active</button>
            <button onClick={()=>setsort("completed")}>Completed</button>
            <button onClick={()=>setsort("all")}>All</button>
        </div>
        <ul>    {/* Showin active items */}
                {
                props.todos.length > 0 && sort === "active" // If input value is greater than 0 and === "active", Completed = false 
                ? props.todos.map (item => {
                    return (
                        item.completed === false && 
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        /> 
                    )

                })
                :null}
                {/* Showing completed items */}
                {
                props.todos.length > 0 && sort === "completed" 
                ? props.todos.map (item => {
                    return (
                        item.completed === true && (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        /> 
                    )
                    )
                })
                :null}
                {/* Showing all items */}
                {
                props.todos.length > 0 && sort === "all" ?
                props.todos.map (item => {
                    return (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        /> 
                    )
                })
                :null} {/*assign with null = The code above suggests that the number variable is empty at the moment and may have a value later.*/}
        </ul>
    </div>
  )
}

export default connect (mapStateToProps, mapDispatchToProps) (TodoFilter);
