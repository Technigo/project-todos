import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from "moment";

export const TodoInput = () => {
 
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const[dateValue, setDateValue] = useState(moment().format('YYYY-MM-DD'));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(todos.actions.addToDo({
      itemInfo: {
        text: inputValue,
        done: false,
        created : moment(),
        dueDate : (moment(dateValue).toDate())
      }
    }));
    setInputValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
      <input 
        required
        type="text" 
        onChange={e => setInputValue(e.target.value)} 
        value ={inputValue} 
        className = "todo-form-input" 
        placeholder="Add a new task"></input>
      </label>
      <div className="todo-wrapper">
    
      <input className="todo-date-picker" type="date" id="dueDate" name="due-date"
       value={dateValue}
       min={moment().format('YYYY-MM-DD')} 
       max={moment().add(1,'years').format('YYYY-MM-DD')}
       onChange={e => setDateValue(e.target.value)}
       />
      <input className="todo-form-submit-button" type="submit" value="+ Add" ></input></div> 
     
    </form>
  )
}