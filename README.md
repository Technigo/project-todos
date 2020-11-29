# Project Todos

The purpose of this project was to build a todo app where it was possible to add tasks, list them and toggle whether a task is copleted or not.

In this project, I pulled together all parts of redux, creating own slices and writing reducers and actions with redux-toolkit.

## The problem

I started by creating different components, using styled-component to follow the layout proposed by Technigo.
Then I configured a Redux store and decided that the initalState should contain 3 initial tasks for testing purposes.
The first reducer I created made it possible to toggle whether the task is completed or not. Thanks to the styled components, it was easy to change the appearance of the task elements based on the task status.
After that, I created a reducer for removing tasks and a reducer for adding a task. I added a counter in the header.

When I was done with the minimum requirements, I added a "Clear done" button and a priority drop list and I gave a hover effect to the delete and clear buttons.

If I had more time, I would spend it on a more responsive layout, a component to display when the state is empty, some filters and a local storage.

## View it live

You can take a look at the result on https://sandrines-todo.netlify.app/
You are welcome to visit my pull request https://github.com/Technigo/project-todos/pull/113 and leave some comments about my code.
Enjoy!
