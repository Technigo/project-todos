import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from 'reducers/todoData';

export const TodoItem = ({todos}) => {


const dispatch = useDispatch();

const handleToggle = () =>{

dispatch(toggleComplete({id: todos.id, completed: !todos.completed}))


}


const HandleDelete = () => {

dispatch(deleteTodo({id: todos.id }))


}

document.ontouchmove = function (e) {
  return true;
}

return (

<section className="todoListContent"> 
<section className="todoListContent___text"> 
<h1> {todos.titel} </h1>
<p> {todos.task} </p>
</section>

<section className="todoListContent___btnAndCheckbox"> 
<label>
<input type="checkbox"
checked={todos.completed}
onChange={handleToggle}
/>
completed</label>


<div className="todoListContent___btnContainer">
<button onClick={HandleDelete}> Delete </button>
</div>
</section>
</section>

)



   }