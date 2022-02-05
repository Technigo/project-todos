# Project Todos📄
With this projec I am continuing my journey with Redux by starting to write my own reducers and actions. 
In the finished to-do app, I am able to add tasks, list tasks and toggle whether a task is done or not.

## The problem
1. As always, start by sketching out what the app will look like and how I'd like to use components helped a lot. Now we're using redux, I can very easily break things into many small, manageable components.
2. Once I had the rough sketch, It was about how the data in your store should look. "What data does a todo task contain?" Knowing how my data will look helped a lot when writing the redux actions and then using that data in my components.
3. Once I've made your first slice, I used combineReducers and configureStore to create a store in App.js which can be passed to a Provider as shown in the codealong.
4. With all that set up, I started creating components: TaskList component which uses useSelector from the 'react-redux' package to fetch the list of todos and map over them.
5. Once I have your todos being listed, it was much easier to see actions I start creating working or not! 
6. The next step was to implement some form of `addTask` action in the `tasks` reducer which will `push` a new task into the array of hard coded tasks. I could then set up a form (using `useState` to control form elements and then pass the values into actions on submit).

## View it live🙇🏻‍♀️
haruahn-todo-list.netlify.app
