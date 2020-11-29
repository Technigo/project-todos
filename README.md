# Project Todos

This project is built with React and Redux. It's a todo app where the user can create their own todo list as well as edit it by deleting individual elements, all finished tasks or all entries. In the background, there is a reducer that is called from the various components and handles the requested actions.

## The problem

After taking part in a lot of training material to learn how to create the reducer I started with a predefined array that consisted of some tasks and made sure that these were presented in the browser. Then I created the ID of the todo elements to have something to compare with when I would delete them. I created a function in the reducer that removed an element when the user clicked on it and then one to add new data. After that I added more functions such as removing more than one element at a time.
To present the date I used moment.

## View it live

https://project-todos.netlify.app/
