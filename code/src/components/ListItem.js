import React from 'react';
import { useDispatch } from 'react-redux';

import { todolist } from 'reducers/todolist';

// Component to render each item on the to do list individually, this component
// will provide a checkbox to mark the task as complete or incomplete, the text
// of the task itself and also a button to remove the task from the list
// We get the specific item passed in as a prop so we can access all its properties
export const ListItem = ({ listItem }) => {

  const dispatch = useDispatch();

  // Function called when the checkbox is clicked: this will change the complete
  // property from false to tru or vice-versa. In order to do this, we need to 
  // disptach the changeComplete action (one of my reducers), which sends in a data
  // object to my store with the itemId and the complete value it should change to:
  // if complete is currently false, we want the action to change it to the opposite
  const handleOnChange = () => {
    dispatch(todolist.actions.changeComplete({
      itemId: listItem.id,
      complete: !listItem.complete
    }));
  };

  // Dispatches an action to remove this task from the list, sends in payload
  // with the id of the specific task we want to remove
  const removeTask = () => {
    dispatch(todolist.actions.removeToDo({
      itemId: listItem.id
    }));
  };

  return (
    <div className="list-item" style={{display: "flex"}}>
      <input 
        type="checkbox"
        onChange={handleOnChange}
        // The checked attribute value depends on the complete property of the item
        // this property has an initial value of false, but will change to true
        // when clicked on which calls the handleOnChange function
        checked={listItem.complete ? "checked" : ""}
      ></input>
      <p style={{textDecoration: listItem.complete ? "line-through" : ""}}>
        {listItem.text} / {listItem.category}
      </p>
      <button type="button" onClick={removeTask}>Remove Task</button>
    </div>
  );
};

// Remove display flex from list-item and fix that with CSS later
