import React from 'react';
import { useSelector } from 'react-redux';


const Header = () => {

const items = useSelector((store) => store.todos.items);

const activeTodos = items.filter(todo => !todo.isComplete).length; 

const getDay = () => {
return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

const getDate = () => {
    return new Date().toLocaleDateString("en-US", ({ month: 'long', day: 'numeric' }));
    }

return (

    <>
    <h1>Todos</h1>
    <div>{ activeTodos }</div>
    <div>{ getDay() }</div>
    <div>{ getDate() }</div>
</>

)

}


export default Header;
