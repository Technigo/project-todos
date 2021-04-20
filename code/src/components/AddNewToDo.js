import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

//styled components import 8{ }

//Here is the component where the user can add a new item to the list
export const AddNewToDo = () => {
    //The text to describe a new task and the category it belongs to
    //are saved as a local state and then this data is passed on to the global
    //state in the store when dispatching the add new to do action.
    const [newTodoItem, setNewTodoItem] = usestate('');
    const [category,setCategory] = useState('')

    const dispatch = useDispatch();

    // Function called when the submit (Add To Do) button is clicked. This will dispatch
  // the addToDo action (one of our reducers). In this action what I want to do is send
  // in data to the global state regarding the new task to add to the list. So I pass in
  // an object containing the data on the new task to be added, this is the payload
  const handleOnSubmit = (event) => {
      event.preventDefault();

    // Setting the id for the new tasks with a timestamp, this will create a quite
    // unique ID and chances of it repeating are super low.
    // the only tasks with a set id are the ones included in the initial state
    dispatch(todolist.actions.addToDo({
        id: Date.now(),
        text: newTodoItem,
        complete: false,
        category: category
    })
  };

  //to clear input field
  setNewTodoItem('');
  setCategory('');
};
  // This component renders a text input field so the user can write down the new item to
  // add to the list. Then they can choose a category for this new task and when they click
  // on the Add to do buttton, the item will be added to the todolist global state which contains
  // all items in the to do list
  return (
      <AddToDoForm onSubmit={handleOnSubmit}>
          <LabelText>
              Add To Do:
              <AddToDoInputField
                type="text"
                onChange={event => setnewTodoItem(event.target.value)}
                value={newTodoItem}
                required >

              </AddToDoInputField>
          </LabelText>
          <LabelText>
              Category:
              <Select value={category} onChange={(event) => setCategory(event.target.value)} required>
                  <option value="">Select category...</option>
                  <option value="Coding">Coding</option>
                  <option value="House">House</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
              </Select>
          </LabelText>
					<AddButton typ="submit">+</AddButton>
       </AddToDoForm>
     )
	};