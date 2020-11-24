# Lecture 1

In Redux, there's one store for your entire app's state. State's an object with properties. 
We need to use a reducer when we change the state. But we don't interact directly with the reducer, but rather create actions which interacts with the reducers. The reducer's responsibility is to listen to actions.

### Concepts of Redux:
* ACTION. We dispatch these from components.
* REDUCER. They listen to actions. And updates the STORE.
* STORE.
* SELECTOR. Find things in the store and renders it to the components.

Redux toolkit gives us a way of defining actions and reducers without writing a lot of code.

## Slices
Todo list application. Action for creating a todo, deleting a todo, and maybe completing a todo. We put all the logic in one file. Instead, this is a perfect time to split into separate files. In redux, this concept is called a slice. It's a file with its own reducers, its own actions, and its own state. We're later gonna combine the slices and put them in the same store.

### Example
Two objects; user objects and todos array. user is a slice. todos is another slice. 
user: {
  name: "Jennie",
  subscribeToNewsletter: false
},
todos: [
  {id: 1, text: "Buy carrots"},
  {id: 2, text: "Do dishes"}
]

## Actions
Redux action is a quite abstract concept. By itself, it doesn't do anythign – but the purpose of an action is to combine an action identifier, and a payload.

Reducers listen to the actions and act on them.

### Identifier
**Example 1**
  identifier: "ADD_TODO"
  payload: {text: "do the laundry"}

Payload is the actual text of the todo. 
This action would be triggered when user fills in an "add todo" form and clicks submit. Redux uses the identifier and figures out what REDUCER should listen and act on the action, and the payload is the value the reducer should update the state of the todos array. 

**Example 2**
  identifier: "UPDATE_USER_PROFILE"
  payload: { name: "Jennie", subscribeToNewsletter: true }

Identifier is used so that the redux knows what reducer to listen.

## Reducers
In components, we dispatch actions which comes with an identifier. Then we have a reducer. Its responsibility is to look for an identifier. 

Since this is react, components will update themselves as soon as something in the store changes. 