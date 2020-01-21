Project 15, To-Do App, build during Technigo Bootcamp Winter 2020!

## 1. What is this?

In this week's project, we used React Redux to build a To-Do application, that enables you to add tasks, list tasks and toggle whether a task is done or not. 

## 2. What did I do?
I started off by sorting all the different components, what they would do, and how they would all be connected. Since we were using React Redux to render the components I started off by adding all the components and setting up the combineReducers and configureStore and then adding the Provider. I also started off by deciding the initialstate, so that I would be able to change that initial state using the reducers based on what To-Do I wanted. And I decided to make a To-Do shopping list. 

So in the app, you are able to add an item to the "shoppingcart" and by dispatching an action to the "store" this updates the initial state and creates a new item that you then can toggle to see if you wish to add that item to your shoppinglist. I did the same actions/dispatch with removing items, adding them to a shopping summery and clearing the whole to-do shoppinglist. So the main thing in this project was to understand how instead of updating every component, you can dispatch actions to the store and then render the right component based on the new state. 

## 3. Where can you see it in action?

This is where you can find my deployed project:
https://myshoppingtodos.netlify.com/ 