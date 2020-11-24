# Project Todos 📝✅

This project's goal is to apply my Redux knowdledge and build an application which pulls together all the parts of Redux by building a To Do app 💪 In this app, the user should be able to: add/ remove tasks, list tasks and toggle whether a task is done or not.

The idea is to take advantage of Redux's state managing features and create my own Store with reducers and actions from scratch. I achieved this by using the **Redux Toolkit**.

## How I solved it - What I learned

The first step was to create a sketch of what I wanted my app to look like and what features I wanted to implement, this made clear which data I will be needing to show the different elements in the browser and the actions I would need to create in order for them to be functional.
- I started by configuring my **Store** with an **initial state**: I chose to have 4 different initial tasks to display - so I began with a **reducer** which only stored this initial state and then built the component to show those tasks. This component accesses the store by using a **selector**, which returns an array containing all tasks, then I map over the array in order to show the different to do tasks on the browser.
- Next step was to add the **Add and Remove tasks functionality**: In order to Add a task, there is an input form with a text field in which the user can write a new task. Once the Add button is clicked, an **action is dispatched** which will send an object containing all the necessary data in order to add this new task to our already existing state. My addToDo reducer is invoked and a new task object is pushed to the current store.
- Removing a task is performed via a filter done in the removeToDo reducer: when the Remove button is clicked, an action is dispatched which will send in the item's id (for the item we want to remove). Then a filter is performed which will return all items excepte the one with the id that was sent in.
- I've managed to implement a **custom checkbox** which checked value is dependant on whether the task has the property complete in status true or false. This was interesting to do since I wanted to challenge myself and style this app using only **Styled Components** 💅
- Another feature I had in mind was to show the tasks under different **Categories**: so I created a component for each category which will only render the tasks that have the according category property.
- It's my second project using **Styled Components**: I managed to create a library for each main section in the app, which will contain the styled components needed for that section and then import those to the components containing the logic. I found this approach very fun to implement and also very organized and easy to follow. Definitely a fan of how we can implement **conditional styling** this way also 👍

## View it live

I built this app with my needs in mind: I work with daily To Do lists, so making a digital version of what I'm already used to work with was really fun 😁 Check it out here: https://vane-todos.netlify.app/
