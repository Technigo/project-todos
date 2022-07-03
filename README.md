# Project Todos

This week I built a ToDo app were you can add tasks, delete tasks and toggle whether a task is done or not and change it back to not done. 
Also it shows a count of the done tasks.

This week was our second with Redux and we practiced building our ToDo app from scratch creating the slice with dummy data and then uniqid for new ToDo tasks. 
We used reducers, useState, useSelectors and useDispatch to send and recieve data and updates from the store, and splice and push to add and delete tasks.
We continued with styled components and this week was no given design but our own, and I started the project by using a FigJam board for structure.   

## The problem
I first solved the issue with text overflowing by disabeling the button for text > 25 characters and writing a placeholder that the task should be short, but then went back to fix this using word-break: break-word and overflow-wrap: wrap.

If I had more time I would add todays date, style the checkbox to be larger, use a conditional to only show the counter when > 0, and add a function for greying out the task when checked.    


## View it live
https://lovely-todo-list.netlify.app/
