# Project Todos

This project is a task list web application that allows users to add and remove tasks, and mark them as complete or incomplete by checking the checkboxes. The component TasksList is the main component that renders the list of tasks. It uses useSelector and useDispatch hooks provided by the react-redux library to get access to the todos state from the tasks reducer, and dispatch actions to update the state.

The component also uses the moment library to display the current date at the top of the page. It also has a confetti effect that displays when all the tasks are completed. The handleCheckboxChange function updates the state when a checkbox is checked or unchecked, and the useEffect hook checks whether all the tasks are completed or not, and sets the showConfetti state accordingly.

The StyledRemoveTask, StyledUl, StyledLi, and StyledCheckbox are styled components that handle the styling for the remove task button, the list of tasks, the individual task item, and the checkbox respectively.

## View it live

https://ninas-kids-todo-app.netlify.app/

Icons:
"https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Octopocto - Flaticon</a>
"https://www.flaticon.com/free-icons/done" title="done icons">Done icons created by manshagraphics - Flaticon</a>