import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const TodoInput = () => {
 
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  //Create a handle submit function to dispatch add Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    //Dispatch the action to save the new todoItem.
    dispatch(todos.actions.addToDo({
      itemInfo: {
        text: inputValue,
        done: false,
        created : Date.now()
      }
    }));
    //Clear the textField
    setInputValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={e => setInputValue(e.target.value)} value ={inputValue} className = "todo-form-input"></input>
      <input type="submit" className={"todo-form-submit-button"}></input>
    </form>
  )
}