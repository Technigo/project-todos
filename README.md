# Project Todos
This project was made during the Technigo Bootcamp. 
It is a Todo app where you can add new todos, remove one item, or remove all. 
It also have a empty state styling. 

## My project

My project contains these folders: 

- App.js - My provider and store
- Reducer - Where i store all my reducers and my Initalstate. 
- Components 
   * List of todos where is use map() to show each item and it's costume made checbox and delete button. Here is also the logic for my empty state styling.  
   * Item is the individual Todo on the list. Here i use Dispatch to trigger the reducer action toggleCompleted and the reducer action RemoveItem.
   * Header is where i display todays date using moment.js, i also display how many todos you have completed VS how many todos you have in the app. 
   * AddItem is where i use a form and input tag to add new todos to the List. Here i have a local state and also i use Dispatch to activate my reducers action called AddItem. 
   * Checkbox is where you find all the code for the costume made checkbox, including a local state.

- Styling - 95 % of this project is made with Styled components and can be found in this    folder. The 5% that is not styled components can be found in Index.css and it is my images and the styling for my Delete all Alert. 

Extra: 
- NPM PACKAGE - https://sweetalert.js.org/ 
If you press the "Delete All" button in the Header you will get a sweet alert with a danger warning. 
- Empty State - When you have no more todos left in the list you will recieve an img with a golden trophy. The logic for this can be found in List.js 

## TECH
- REDUX
- REACT
- JSX
- STYLED COMPONENTS
- JAVASCRIPT


## View it live
https://moas-todo.netlify.app/










