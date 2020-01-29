# Project Todos

In this week's project is to use redux and build an application which pulls together all the parts of redux by building a todo app.

In my todo app, you should be able to add tasks, list tasks and toggle whether a task is done or not. 
I was free to style my todo list however I'd like, but "try to keep it simple and clean" was a demand. 

## What I learned 🧠

* How to structure a redux store
* How to write reducers and actions
* How to interact with your store using selectors or by dispatching actions

## How I get started 💪🏼

1. Forked a repo
2. Cloneed into my projects folder on my computer
3. Opened up VS Code
4. In the terminal, I ran `cd code` to change into the code folder
5. Installed the dependencies needed for react by running `npm install`
6. Ran the react development server by running `npm start`

```
npm install @reduxjs/toolkit react-redux
```



With all that set up, you can now start creating components. For example, you could make a `TaskList` component which uses `useSelector` from the 'react-redux' package to fetch the list of todos and map over them.

Once you have your todos being listed, it's much easier to see actions you start creating working or not! A good next step is to implement some form of `addTask` action in the `tasks` reducer which will `push` a new task into the array of hard coded tasks. You can then set up a form (keep using `useState` to control form elements and then pass the values into your actions on submit).

## Requirements 🧪

* Your app should list all todo tasks - completed or uncompleted
* You should be able to mark an uncompleted task as complete
* You should be able to change a completed task back to uncomplete
* You should be able to add new tasks
* Your app should show a count of either all todos, or all uncomplete todos
* Code follows Technigo’s code guidelines.
* Contribute by helping others with this project on Stack Overflow.
* If selected; demo your solution for your team.



## Stretch Goals 🏃‍♂

**_A 'clear all' button_**

Create a button which, when clicked, empties the todo list. You could also use this opportunity to make your app look nice when there's no data. See [empty states UX design](https://www.toptal.com/designers/ux/empty-state-ux-design) for some ideas.

You can see it here: https://todo-petrabrinck.netlify.com

