# Week 14 - Technigo bootCamp

# Project Todos

In this week's project, it's time to build an application with redux by building a Todo app.

In the todo app, some of the requirements were:  
- Your app should list all todo tasks - completed or uncompleted
- You should be able to mark an uncompleted task as complete (and change it back to uncomplete)
- You should be able to add and remove tasks
- Your app should show a count of either all todos, or all uncomplete todos (or both)
- Add a timestamp for each task indicating when it was created. Timestamp should be displayed as formatted date, but stored as raw date. 
- Add a **complete all** button to set all tasks as completed. You could also use this opportunity to make your app look nice when there's no data. See [empty states UX design](https://www.toptal.com/designers/ux/empty-state-ux-design) for some ideas.
- Use styled-components instead of vanilla CSS to do your styling.

## The problem
This week, I started by sketching out what my app will look like and how I'd like to use components. Once I have the sketch, I thougth about how the data in the store should look and what functions did I need.

Then I stared coding the store configuration and basic components. I create every function that I need accoding with the components I created. Finally I added the logic for completed tasks. I had inspiration in the design base in the "To Do" app for phones, triyng to keep color just in the background. 

In the project I used [react-redux](https://react-redux.js.org/), [moment.js](https://momentjs.com/), [styled-components](https://styled-components.com/) and [react-collapse](https://github.com/kunukn/react-collapse).

## View it live

See live: https://project-todo-priscilaalfaro.netlify.app/
