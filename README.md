# Project Todos ✔️
For this project we were tasked to create a todo app using redux global store and react. One of the main goals is to practice working with reducers and actions to get used to selecting data from the global store and dispatching data to the global store. 

The requirements for the todo app are:
1. Should list all todo tasks.
2. Should be able to mark a task as complete or uncomplete and switch between the two different states.
3. Should be able to add and remove tasks.
4. The app should show a count of either all the todos, or all uncomplete todo's or both.

## How I approach the project and what I did:
1. Started by writing out on paper the different components I would need.
2. Created my global store, setting up the inital state to an empty array and creating the slice where the reducers will be housed.
3. Then I thought about what reducers I would need and wrote the code in the global store file: One that add's a todo, one that set's the task to done and one that removes the task.
4. After this I started to implement access to the store in App.js and configuring the store by using the combineReducers and configureStore and then wrapping the whole of my app and the components that will structure the app in the provider and giving it a prop of the store. 
5. Started selecting data from the store, using useSelector, and dispatching data to the store depending on the action the user is doing using useDispatch.
6. Implemented the clear all todos button by creating a reducer that takes the current global state and replaces it with an empty array. Also implemented an empty state design which the user see's when the clear all button is clicked and there are no tasks.
7. Added the time stamp for each todo by using the moment.js Library. 
8. I also decided to use styled components and started out by writing them in each of the components they related to. Then once I was finised with the styling I created a file for each of the styled components which I import into their specific component file. 
9. Implemented using local storage in the browser so whatever the initial state is it'll be retrieved from there rather than the global store. Thus enables the user to still see todo's added when the page is reloaded.

## View it live
Check out my todo list here https://epic-blackwell-4f00c6.netlify.app/ 
