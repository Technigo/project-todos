# Project Todos

We built a todo app by using React, Redux, style components. The app includes these functionalities:
 - List all todo tasks
 - Count uncomplete tasks
 - Classify tasks based on category: today tasks, uncomplete tasks, complete tasks, all
 - Add new task, schedule due date, select task's category
 - Remove single task or all tasks
 - Toggle checkbox to mark complete/uncomplete task, or complete all tasks
 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?
First, I designed the prototype in Figma to give the app a certain visual and determine essential functionalities which I want to add. In this project, I practiced using Style Components and learned how to pass props and style elements conditionally. 

Next, I found challenging to understand Redux flow at the beginning and advoid data mutation. I solved the problem by seperating correct datas and functions in global or local state. In order to build immutable data, I carefully passed there inititate state to new variable and applied changes to the new varible, or using spread operator for array, object. 

Lastly, the hardest part was editing state. My solution is to add editing state, either true or false, align with editing object to store the editing value, edit ID, so on in the global state. And update the data based on that. 

## View it live

https://suki-todo.netlify.app
