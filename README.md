# My Todo-list

This is a simple todo list app meant as a helper in everyday life. I built it during the Technigo Bootcamp for frontend developers in fall 2020 and it's one of the first projects I built using Redux.

## What it does

In this app you can create a list of todo's. Every new item needs to have a text and will get a timestamp when you create it. You can mark an item in the list as done and unmark it again if it's actually not done yet. You can also delete the item if you don't need it in your list any more. 

In the top, the app shows you today's date and gives you an overview of how many items there are in the list and how many of them are done. In the bottom, you have the option to mark all tasks as done, to remove the done tasks from your list or to clear the whole list. 

## The approach

The app is built using React and Redux. All the core functionality is stored in a single reducer-file called todos. There, you will find the reducers to 
- remove a task, 
- toggle done / not done - button
- add a task,
- mark all tasks as done,
- clear the done tasks and
- clear the whole list.

The store will keep an array of task-objects and every object has for properties: id, text, done, created where the last one contains a time stamp.

The styling is done with styled components which are stored in three files: one for the header part of the app, one for the central list part and one for the bottom part.

The components' follow a similar structure where 'Header', 'Tasks' and 'Bottom' are the main components with some additional ones nested inside. 

For the 'clear list'-button I added a confirmation dialogue that will open when the button is clicked to make sure the list isn't cleared accidentally. For this I used the package "Sweetalert". 

## Limitations

So far, the site doesn't have a local storage yet and will go back to the default list as soon as you refresh the page. This is something I would have added if I had had more time for the project. Also, I would have liked to implement a priority-function for the tasks and filters to e.g. display only the tasks with highest priority. 

## Compatibility

The app's design is mainly made for mobile use but it works on tablet and desktop as well. I tested it using the dev tools in Chrome, Firefox and Edge where everything works as expected.

## Tech used

- HTML5
- CSS3
- JavaScript ES6
- React
- Redux

### Additional packages

- styled components
- moment.js
- sweetalert

## View it live

You can see the site up and running here: https://henrikes-todo.netlify.app/
