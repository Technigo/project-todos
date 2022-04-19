import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from 'reducers/reducer';
import { useDispatch } from 'react-redux';


const mapStateToProps = (state) => { //First argument - plucks pieces of state out of Redux and assigns them to props that your React component will use.
    return{
        todos: state,
    };
};

//Add todos
const mapDispatchToProps = { //Second argument - function which binds action creator functions so that you don’t have to write props.dispatch(actionName()) all over the place, you can just write props.actionName(). 
      addTodo: (obj) => (addTodos(obj)),
    };


const TodoInput = (props) => { 
    const [todo, setTodo] = useState("");
    
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
  
    return (
    <div className="addTodos">
        <input 
        type="text"
        onChange={ (e)=> handleChange(e)}
        className="todo-input" 
        />  

        <button className="add-btn" 
        onClick={() => props.addTodo({
            id: Date. now(), //Generates the unique ID that was typed in
            item: todo, 
            completed: false, //Boolean value set to false
        })}>Submit</button> 
        <br/>
    </div>
  );
};
//Using connect method to connect the react component with redux store
export default connect (mapStateToProps, mapDispatchToProps)(TodoInput);

