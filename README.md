# Project Todos

This project is a to do app built with the main goal of working with all the parts of Redux.
The user is able to add and remove tasks to a to do list, as well as check and uncheck a to do item as done/undone.

## The problem

I started by creating my store and reducers, then the provider in App.js where I render 3 out of the 4 components I created: 

  Header.js - this is where the date (using npm package moment.js) and the name of the app is        displayed.

  AddTasks.js - display's a button for entering new tasks, when clicked it opens up a form with a submit button for submitting a new task and add's it to the store via useDispatch.
  
  TaskList.js - display's any potential tasks in the store and render's the 4th component Overview.js which show's number of tasks completed out of the total number, but only if there are any tasks.

With time I will add the option to select a category to the tasks as well as add nicer looking checkboxes with CSS. 

## View it live

https://todo.brucette.com/

