# Project Todos

For this project I built a Todo App using Redux with React. The user can add and remove tasks, list tasks, see the amount of tasks and toggle whether a task is done or not.
I also included a complete all button and a timestamp, using moment.js. 

## The problem

To build this app I had to pull together all the parts of redux - the store, slices, reducers and actions. I gained a lot of useful experience.

I created a slice with one root reducer including four methods: addTodo, toggleTodo, deleteTodo and clearAll. In App.js the store was set up. In the components I fetched data with selectors and dispatched actions to update the store.

For the first time, I used styled-components to do the styling. There's still a lot to learn about what's possibile to do with styled-components but I really enjoyed this approach and how it's structured. I've done a Mobile first design for this project, with no other media query breakpoints.

What I learnt:
- The role redux-toolkit plays
- How to create new slices
- How to create new reducers
- How to create new actions
- What immutability means and how to work with it
- How to structure a redux store
- How to interact with the store using selectors or by dispatching actions

## View it live

https://to-do-app-kim.netlify.app/
