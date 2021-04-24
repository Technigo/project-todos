# Redux project: ToDo app
In this one week's project the focus was to learn:
- How to structure a redux store
- How to write reducers and actions
- How to interact with your store using selectors or by dispatching actions

The app has been generated using create-react-app.

And uses the following npm packages that are not included in the create-react-app:
	- styled-components
	- date-fns
	- material-UI - first time, spent some time reading up on that
	- uuid
	- react-redux
	- reduxjs/toolkit
## Features
- User can:
	- add tasks
	- sort tasks by categories
	- toggle completed status of each task
	- delete one task
	- toggle all tasks as done
	- delete all tasks
## Reflections
I enjoyed the theme of this week's project and wanted to create an application that I would myself use and/or want to recommend to a friend. 

I started out by learning more about Redux and decided to practice using styled components, and introduce Material UI in the project. But I did not have a clear styling in mind at the beginning of the week which made it more tricky to figure out the hierarchy logic of components. I would start by researching different applications that I am using in my daily life a bit, listing their pros and cons both in terms of features and design to plan it better if I did it again.

If I had more time I would also work with React datepicker so the user could choose a due date for their todos.
If this project would have been with a fetch request I would make it more energy efficient, instead of getting data from global store in each component. And I am unsure if the approach that I took in this project is agreeable?

Furthermore if I were to re-do the project in the future I would also test a different styling, where things would move dynamically on the page to give all the features space on an iPad for example. And I would change the animation as I could not get the second layer background on it to become transparent.
## View it live
https://your-todo-app.netlify.app/

