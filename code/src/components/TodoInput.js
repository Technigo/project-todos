import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from "moment";

export const TodoInput = () => {
 
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const[dateValue, setDateValue] = useState(moment().format('YYYY-MM-DD'));

  //Create a handle submit function to dispatch add Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    //Dispatch the action to save the new todoItem.
    dispatch(todos.actions.addToDo({
      itemInfo: {
        text: inputValue,
        done: false,
        created : Date.now(),
        dueDate : (moment(dateValue).toDate())
      }
    }));
    //Clear the textField
    setInputValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input className="todo-input" type="text" onChange={e => setInputValue(e.target.value)} value ={inputValue} className = "todo-form-input"></input>
      <input className="todo-date-picker" type="date" id="dueDate" name="due-date"
       value={dateValue}
      // min={moment().format('YYYY-MM-DD')} 
       max={moment().add(1,'years').format('YYYY-MM-DD')}
       onChange={e => setDateValue(e.target.value)}
       />
      <input className="todo-form-submit-button" type="submit" className={"todo-form-submit-button"}></input>
    </form>
  )
}