import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { makeStyles } from "@material-ui/styles"
import TodoCard from "./TodoCard"




//styling: 

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         margin: "10px"
//     },
//     list: {
//         display: "flex",
//         justifyContent: "space-between",
//     },
//     checkbox: {
//        color: "pink",
//     },
//     delete: {
//         backgroundColor: "lightblue",
//         color: "blue"
//     },
//   });
  
const TodoList = () => {
    // const classes = useStyles()
    //A useSelector so we can reach for the items array in the todo's store
    //Reaching for the store(reducer), then the todos, then the items 
    // const items = useSelector((store) => store.todos.items)

    //To be able to dispatch the action (changes) we want to do with the todos, we need to create dispatch hook
    // const dispatch = useDispatch()

  
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
