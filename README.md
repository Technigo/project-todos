# Project Todos

This week's assignment was to build a website with a To Do-list using React & Redux. The user should be able to add tasks to the list and toggle whether a task is done or not. Furthermore the user should be able to remove tasks from the list and see an overview of how many tasks are done and how many are left.

## The problem

I started with setting up the reducer-file (tasks.jsx) and created an array for the to-dos in that file. Then I created a slice and the reducers in which I stored toggleItem, removeItem and addItem for my functions in the to-do app.

After that I created the components needed and used .map to map through the array of tasks. I used redux-store and dispatch to be able to grab the reducers. For the tasks ID's I used 'uniqid' so they would all have their own uniqely created ID's. I also created an input so the user could add their own tasks. All components were rendered in the "mother-file" App.js. 

Lastly I styled everything in vanilla CSS. If I had more time I would do the styling in styled-components and also style the check-boxes. I would also add a function that could toggle all items in the array, for example mark all as checked or delete all.


## View it live

procrastinator-list.netlify.app
