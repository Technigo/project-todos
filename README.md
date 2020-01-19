# Project Todos

In this week's project, it's time to flex your redux muscles and build an application which pulls together all the parts of redux by building a todo app.

In your todo app, you should be able to add tasks, list tasks and toggle whether a task is done or not. 

You're free to style your todo list however you'd like, but try to keep it simple and clean - remember prospective employers will probably be interested to see this project!

Here's an example of what you could aim for (mobile first design - this project should be a web app, not react native):

<p align="center">
<img src="https://i.imgur.com/pQxk9wv.png" alt="Mobile design" />
</p>

## What you will learn 🧠

* How to structure a redux store
* How to write reducers and actions
* How to interact with your store using selectors or by dispatching actions

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Hints and tips to complete the project 🤓

As always, start by sketching out what your app will look like and how you'd like to use components. Now we're using redux, you can very easily break things into many small, manageable components. 

Once you have your sketch, think about how the data in your store should look. What data does a todo task contain? Sketch it out and get it clear in your head. Knowing how your data will look will help a lot when writing the redux actions and then using that data in your components.

Then you're ready to start working on the project. The `code` folder has a copy of the react starter, but none of the redux packages you need are installed yet, so you'll need to do that yourself:

```
npm install @reduxjs/toolkit react-redux
```

When starting to write your code, try to work on the project in small chunks rather than taking on too much at once. For example, you could start by making a new slice to store your todo tasks and use a hard-coded list of tasks to get up-and-running with. 

<p>
<details><summary>Stuck? Click here to see an example.</summary>
<p>

Here is an example slice you could create to store your tasks:

```js
// src/reducers/tasks.js
import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
  ]
})
```

</p>
</details>
</p>

Once you've made your first slice, use `combineReducers` and `configureStore` to create a store in App.js which can be passed to a `Provider` as shown in the codealong.

<p>
<details><summary>Stuck? Click here to see an example.</summary>
<p>

Here is how you can set up your store to be passed to the provider:

```js
// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      Your components can be mounted here, inside the Provider.
    </Provider>
  )
}
```

</p>
</details>
</p>

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


## How to hand in the code 🎯

* When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

* Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
* Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the '[TAG]' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call. 

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Add a 'clear all' button_**

Create a button which, when clicked, empties the todo list. You could also use this opportunity to make your app look nice when there's no data. See [empty states UX design](https://www.toptal.com/designers/ux/empty-state-ux-design) for some ideas.

**_Add a timestamp to tasks_**

When a task is created, add the current date & time in your store. Then use a library such as [moment](https://momentjs.com/) to format how old the task is in a nice way. For example 'Added 5 days ago' or 'Added 30 seconds ago'.

**_Add a due date to a task_**

Add a date select to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.

**_Add filters_**

You could add buttons or a drop down to change how your task list is displayed. For example, only showing uncomplete tasks, or showing tasks which are overdue (if you did the stretch goal above). Hint: often, when approaching things like this in redux, it's common to use the redux store to save the current filter and dispatch actions to change it. You can then use that state in your selector to decide what todos to return from the selector.

**_Use styled-components_**

Try using styled-components instead of vanilla css to do your styling.

**_Categories, projects, and more!_**

The list of stretch goals for this task could be endless. Just google around for todo apps for inspiration. For example, a common feature in todo apps is to have categories (or tags) for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc. Another common feature is projects which could be a group of tasks which all need to be completed and when they are completed, the project is marked as complete.

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
