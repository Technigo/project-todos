# Project Todos

The task was to create a todo-list using React components and Redux. In the Redux store we were supposed to create our own reducer functions to updated the store. 

## The problem

I started by writing the basic functions that would make the user be able to add tasks, clear tasks, delete individual tasks and toggle the tasks using a checkbox. After that I added a function for selecting a deadline date for the task. I hade some problems with figuring that out but eventually got it to work. It's not always easy to understand how the npm packages are supposed to be used. 

I decided to create a seperate checkbox-component as well and use a custom checkbox. It took me some time to get that one to render. However, suddenly my toggletask-function stopped working and it took me ages to figure out why. Turned out that the function was working but the footer was blocking the tasklist. I had forgotten to change the z-index of the footer, if I had checked properly in the browser I would have seen it. Oh well, I learned that - ALWAYS check the sinpector tool in the browser PROPERLY before you start re-writing stuff. 

## View it live

https://todo-annika-sonnek.netlify.app/
