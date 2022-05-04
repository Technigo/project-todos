# Project Todos

We built a todo app by using React, Redux, style components. The app includes these functionalities:
 - List all todo tasks
 - Count uncomplete tasks
 - Classify tasks based on category: today tasks, uncomplete tasks, complete tasks, all
 - Add new task, schedule due date, select task's category
 - Remove single task or all tasks
 - Toggle checkbox to mark complete/uncomplete task, or complete all tasks
 - Use Localstorage to save tasks
 

## The problem

First, I designed the prototype in Figma to give the app a certain visual and determine essential functionalities which I want to add. In this project, I practiced using Style Components and learned how to pass props and style elements conditionally. 

Next, I found challenging to understand Redux flow at the beginning and advoid data mutation. I solved the problem by seperating correct datas and functions in global or local state. In order to build immutable data, I carefully passed there inititate state to new variable and applied changes to the new varible, or using spread operator for array, object. 

Thirdly, the hardest part was editing state. My solution is to add editing state, either true or false, align with editing object to store the editing value, edit ID, so on in the global state. And update the data based on that. 

Lastly, I focused on how to build a user-friendly app. In order to succeed in this step, I spent time on searching for inspiration from todo app from big tech companies such as Microsoft, Apple. In my project, I applied few things to make the user experience greater such as:
 - Having 'Add Task' button in all pages to make it convinient for user to add task anytime
 - In the filter dropdown menus, the user can view different categories which matches with their need
 - Different background color for complete and uncomplete tasks to make them easy to recognise
 - Alert confirmation when new task is added
 - Empty state with descriptive Call To Action text
 - View today task 

## View it live

https://suki-todo.netlify.app
