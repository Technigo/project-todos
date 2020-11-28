# Project Todos ✏️

A todo-app built with React and Redux. The app lists all todo tasks - completed or uncompleted. The state of each todo can be shown as either done or not done with checking a checkbox. New todos are added using a text field. Todos can be removed one by one or all at once using the clear-all button. After pressing clear-all, a warning alert box appears asking if user wants to clear all or cancel that action. The app also counts and shows how many of the listed todos are done.

## View it live 👀

https://app.netlify.com/sites/quirky-kepler-b954a8

## Learnings 🤓

- The role redux-toolkit plays
- How to create new slices
- How to create new reducers
- How to create new actions
- What immutability means and how to work with it

- How to structure a redux store
- How to write reducers and actions
- How to interact with your store using selectors or by dispatching actions

## More features

- A Lottie animation
- Styled components
- Custom checkboxes
- SweetAlert alert box
- localStorage
- responsive design
- mobile first
- accessibility - aria-labels and tabindex. Tested using the Apple screenreader, Lighthouse and WAIVE

## Tools, method and workflow 🛠

1. I started with sketching and structuring the app along lines of logic and styling (components), and actions and reducers required
2. After inital planning I started to code and set up the store first
3. After that I started to add components
4. And then reducers and the actions
5. I separated logic from styling - styled components are structured in one file since this project is not too large

- Creating and understanding custom checkboxes proved to be challenge. Which one is the hidden one and which one is the input type one? And how are they related to each other?
- Also the nesting of components was tricky to understand.

## If I had had more time 🧠
I understand that styled components can be very powerful so I would really like to learn more about conditional styling and global styling. My plan was to also add various filtering options but I did not manage that this time. 


