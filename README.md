# Project Todos

This is a Todo-list created in React and Redux. You can add and remove todos, keep track of how many tasks you have finished and how many are left to do, and you can see when each todo was created. If you have nothing to do, no list is displayed.

## The problem

The todo app is created in React and Redux. I started by creating reducers in order to display the initial state and the functionalities for what dynamic data should be displayed and what should happen when clicking buttons. I created the components for the different parts of the app, and used UseSelector to display information from the reducer in the app. I used useDispatch to create actions that connected functionalities in the reducer to click-events in the components, then added styling, mostly by using styledComponents.

I added custom styling to the chechbox and styled the new-todo-input field nicely. I used moment to display the current date and the time for when each todo was created

If I had more time I would add a date input to new task form in order to set a due date on each task,m and then style tasks differently depending on whether they are overdue or not.

## View it live

https://now-what-todo-app.netlify.app/
