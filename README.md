# Project Todos

This project is a task list web application that allows users to add and remove tasks, and mark them as complete or incomplete by checking the checkboxes. The component TasksList is the main component that renders the list of tasks. It uses useSelector and useDispatch hooks provided by the react-redux library to get access to the todos state from the tasks reducer, and dispatch actions to update the state.

The component also uses the moment library to display the current date at the top of the page. It also has a confetti effect that displays when all the tasks are completed. The handleCheckboxChange function updates the state when a checkbox is checked or unchecked, and the useEffect hook checks whether all the tasks are completed or not, and sets the showConfetti state accordingly.
I used styled components for almost everything.
For example; StyledRemoveTask, StyledUl, StyledLi, and StyledCheckbox are styled components that handle the styling for the remove task button, the list of tasks, the individual task item, and the checkbox respectively. In app.js i used a css file to have my styling.

Redux is a state management library for JavaScript applications, commonly used in conjunction with React. It provides a predictable and centralized way to manage the state of an application, making it easier to reason about and debug. 

In a Redux-based application, the state of the entire application is stored in a single object called the "store". The only way to modify the state is by dispatching actions, which are plain JavaScript objects that describe what happened in the application. 

When an action is dispatched, it is sent to a "reducer" function, which takes the current state and the action as input and returns a new state object. The new state object is then stored in the store and any connected components are notified of the change and re-rendered accordingly. 

Redux also provides a number of middleware options for handling asynchronous actions and other advanced use cases. Overall, Redux can be a powerful tool for managing state in complex applications.

## View it live

https://ninas-kids-todo-app.netlify.app/

Icons:
"https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Octopocto - Flaticon</a>
"https://www.flaticon.com/free-icons/done" title="done icons">Done icons created by manshagraphics - Flaticon</a>