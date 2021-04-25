# Project Todos ✅

I've built a todos application using React Native, Redux and styled components. 


## The problem

The main task was to build a todos application where you can add and remove a todo, list all the todos, display the number of todos and toggle whether a todo is done or not. 

I started by sketching out the basic structure for the components that I would need, the flow of the components and their responsibilities. I also thought about what kind of data I would display in the application and the reducers I would need to set up in the Redux store that will go with the different components. With the sketch done and my decision on the flow of the components and what basic reducers I would need, I proceeded to set up the Redux store structure (the slice and reducers) and then the store in App.js. After that I proceeded to build all the components I would need for the basic structure, inter alia, a header, a todo list, a todo item, a form to add a new todo and buttons. When I had the basic structure for the application in place, I added a button to set all the todos to done, an empty state for when there's no todo, a datepicker so that the user could add a due date for the todo and functionality so that the user can edit an exisiting todo. I also conditionally rendered the form to only be displayed if the user pressed the big plus button and remove it upon adding the todo.

With the above functionality in place, I implemented the styling to the styled components and made the application responsive for mobile, tablet and desktop view.

If I had more time, there are several features that I would've added! The ones on the top of my list would be to 
- connect the application to a REST API to store the todos so that the user can continue using the application,  
- implement a functionality to make the todos dragable (i.e. the user could then move around and set the priorities), 
- create categories/tags with colors for todos so they can be grouped,
- display the datepicker in edit mode so that the user can change the due date (and not just the todo itself as is the functionality at the moment),
- display a timestamp for each todo, currently I'm not displaying the data for this since it looked a bit cramped together with the data for the due date,
- style the due date differently when a todo is overdue, and
- set up a conditional statement to enlarge the empty state depending on the media query breakpoint.


## View it live

Here's a link to my deployed project: https://tender-blackwell-c83127.netlify.app/ 
