import React from 'react';
import { useDispatch } from 'react-redux';

import { todolist } from 'reducers/todolist';
import { CustomCheckbox } from 'styled-components/CustomCheckbox';
import { SingleTaskContainer, CheckboxTextContainer, TaskText, RemoveButton } from '../styled-components/ListsComponents';

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
    <SingleTaskContainer>
      <CheckboxTextContainer>
        <CustomCheckbox isChecked={listItem.complete ? "checked" : ""} onChangeHandler={handleOnChange} />
        <TaskText style={{textDecoration: listItem.complete ? "line-through" : ""}}>
          {listItem.text}
        </TaskText>
      </CheckboxTextContainer>
      <RemoveButton type="button" onClick={removeTask}>Remove</RemoveButton>
    </SingleTaskContainer>
  );
};
