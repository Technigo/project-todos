# Project Todos ✅

The project for this week was to build a Todo List using Redux. In the Todo List it is possible to add tasks, list tasks and toggle between whether the task is done or not, and also a button for removing all tasks.

## The problem

- I started out with creating the todo reducer and slice to store tasks, and used combineReducers and configureStore to create a store in App.js that is passed to a Provider wich holds all the components for the app. After that I created a TodoList component , and in that component I'm selecting the list of todos and mapping over them, displaying each item in the todolist. 

- The todolist also contains a checkbox for marking a task as completed, a button in the shape of a paper bin to delete an item from the list, and also a button to clear the whole todolist from tasks. The header also shows a summary of how many tasks that are done out of the total number of tasks in the list. 

-  If I had more time I would have done more to the styling and also created a local storage to add more functionality to the app. I would also like to add more functionality like timestamps for each task, style  forthe empty state when all tasks are removed, add date input to the form to set a due date on a task and maybe style it differently depending on the date, add categories to tasks and the possibility to group tasks together as a project. 

## Tech
- React
- Redux
- JSX

## View it live

Link to the deployed project on Netlify: https://emmas-todolist.netlify.app/