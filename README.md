## Eccentric Tasks - A Redux web app.

A simple to-do list made with React.js and Redux, with a custom-made reducer and some actions.

The app's main theme was inspired by the French composer Eric Satie. In his diary, he reported strange daily routines: Eating only white-colored foods, having a collection of over 100 umbrellas, and "sleeping with one eye closed".

Satie surely took some literary license when describing his habits. But with this app, I'd like to inspire the user to come up with the weirdest to-dos they can think of.

## Features

- Responsive UI for mobile, tablet and desktop
- Use of the Material UI library (icons and styled checkboxes)
- Redux hooks: useSelector, useDispatch, uniqid, configureStore, combineReducers
- Reducers and actions
- A counter that displays the total of tasks

## Production process

- After coming up with the topic described above and finding some UI inspiration, I organized the production tasks on a Kanban board.
- I set up the core functionality on App.js and the tasks.js reducer.
- Then came the components AddTask (to receive user input) and TaskList (to store the to-dos).
- In the TaskCounter, the challenge was finding out the correct path. Several of the bugs I came across in this app were because of this. I learned to check whether I needed to go one level deeper/higher in the paths.
- I added a date Javascript in the footer, just to practice its use in Redux.
- The main challenges regarding the UI were the checkboxes and the icons. Styling was a bit constrained because they come from an external library (Material UI). So I decided to adapt certain tones of the UI to the default palettes from the library.

## View it live

https://eccentric-tasks.netlify.app/
