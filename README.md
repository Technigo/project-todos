# Project Todos

This is a Todo-list, in which I was inspired by the Swiss mountains. It is created in React and Redux, with a store and reducers to update the store. You can add and remove todos, keep track of how many tasks you have finished and how many are left to do, and you can see when each todo was created. If you have nothing to do, no list is displayed. Special attention was also paid to immutability.

I started by creating reducers in order to display the initial state and the functionalities for what dynamic data should be displayed and what should happen when clicking buttons. I created the components for the different parts of the app, and used UseSelector to display information from the reducer in the app. I used useDispatch to create actions that connected functionalities in the reducer to click-events in the components, then added styling, mostly by using styledComponents. I used moment to display the current date for when each todo was created and also to display the current date.

## View it live

https://tasks-todo-list-fatima.netlify.app/