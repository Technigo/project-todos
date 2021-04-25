## Project Todos

This week's project was aimed to pull together all the parts of redux by building a todo app in combination with React:💥
- structuring a redux store
- writing reducers and actions
- interacting with the Redux store using selectors and despatching actions
- using Redux Toolkits
- React components and styled components

The app functions:
-to addd tasks
-list tasks
-toggle weather a task is done or not

## How I buit it

1. Sketcked the design to visualize the components and features that would be needed to implement. This brought clearity about the actions that I would need to dispactch and the Redux flow that my app would follow. 
2. Configurated my **Store** with an empty array as **initial state**. 
3. Setup of the **Slice** and connecting it to the global store in the App.js
4. Created the first **React component** TodoList that will show all the tasks we add and rendered them with the use of **Selectors**
5. Added a checkbox element to indicate if the task is completed or not. 
6. Wrote the **reducer** and dispatched the **first action** that would allow checking or unchecking a task.
7. Created a **delete button** and dispatched the **second action** that would remove the respective task
8. Added an **add task** button and dispatched the **third action** that would allow to add a new task to the existing list
9. Styled the app using **styled components**


## View it live

https://todos-project-by-dannuzak.netlify.app/
