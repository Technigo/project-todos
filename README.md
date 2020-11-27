# Project Todos 📝

The main goals of this project was build an application which pulls together all the parts of Redux by building a To Do application.
In this app, the user should be able to:  add and remove tasks to the tasks list and toggle whether a task is completed or not.
## Planning & What I learned 🧩
I started by sketching a rough structure of my app and how I wanted it to look like, as well as, which features I wanted to build. I wanted it to be simple and easy to use. 

- I started by creating my provider and store in **App.js**, here is also where I render **TodosList**, which is my main parent component. 
- The **TodosList** component renders all my other components, as well as, my initial state by accessing the store and using a selector, that subconsequently returns the array in the initial state, I then map over that array to print it out to the user. 
- My initial state is defined in the **todos.js**, as well as, all my reducers. These are responsible for the all the actions with the to-do app. 
- In **AddTodo.js** is where I have a form with a text input and a button so the user can write and add a new task. I do this by dispatching an action, which sends an object with the task details and adds it to our existing state array by using **push()**
- In **Item.js** is where I render each item on the to-do list with it's checkbox, text and the remove button, so here is where I dispatch the actions for those alterations. 
- A to-do is removed by clicking on the red cross button which invokes my reducer that received that item id, performs a filter on the current array and by comparing the id's of the items, returns all the items of the array except the one with the matching id that was sent in. 
- To toggle a to-do as completed/uncompleted, the user clicks on the checkbox that invokes a reducer that receives the item id and changes the initial state property from false to true. 
- I also implemented a remove all to-dos functionality in the **RemoveAll.js** where when the user clicks a the clear list button invokes a reducer that returns an empty array, as well as an alert for the user to confirm their decision. 
The user will still be able to add new to-dos to the list as the components, like the text input and the button are rendered, the logic for this is defined in **TodosList.js** . 
- There's also a task counter, which is defined in ther **Counter.js**

For this project I also implemented [styled components 💅](https://styled-components.com/) for the styling, these can be found in the StyledComponents folder. 

This project was a real challenge but it was super fun to build.

## Tech ⚡️
- Redux
- React 
- JavaScript 
- Styled Components
## Extra NPM Packages 📦
- [Moment.js](https://momentjs.com/)
- [Sweetalert](https://sweetalert.js.org/)
## View it live 🔴
[To-do!📝](https://todo-app-sofia.netlify.app/)
