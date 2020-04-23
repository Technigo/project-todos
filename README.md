# Project Todos

Week 15 in bootcamp

First solo project using Redux.

## The problem

I started by creating the store and learning how to select and dispatch information to the store by creating an input field and adding the information inserted there to update the store. The hardest part of the project was to use the selected information to update the styling of the page. I solved it by making ternary operators to add classes depending on the state in the store (true/false). At first I used a local state (with useState) but that did not work when I added persisted state because the local state reset, but not the state in the store. I solved it by adding the local state to the store by dispatching the information to the store.

## View it live

https://malins-todo-app.netlify.app/
