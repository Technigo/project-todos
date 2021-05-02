# Project Todos

This is a todo application built with React, Redux, Styled components and REST API.

## Building the project

The main task was to build a todo application where you can add a todo, list all the existing todos from the store, remove a todo, toggle completion of a todo and display the total number of todos.

I started the project by setting up the structure that I at that point knew I would need, such as reducers, components and as I worked on the project I added on to these. This project was a good oppurtunity to sharpen my skills regarding styled components, so I took it. I struggled a bit with making custom checkboxes with styled components, since manipulating the pseudo elements with styled components can seem a bit tricky at first sight. I really wanted to make the todo application more permanent, rather than just using the store for the interaction, so I decided to implement a REST API. Initially I used a google sheet as the data base through sheet.best, but I very quickly maxed out my available API requests. I wasn't ready to give up this dream yet so I searched for a new REST API and eventually found restdb.io which offered alot more free API requests. I put alot of hours into setting up the data base on restdb and creating all the different request functions. Since it's always some response time for the API I have also implemented local updates to the store that will show until the response. Another thing that you should have in mind when using my application is that the restdb didn't provide any documentation on how to do a batch request, or if it's even possible. Therefor the checkAll and uncheckAll functions are just updating locally and will not send any requests to the API.

I have also implemented functionality for the user to update the text on an item after it has been created, this will send a PUT request to the API and also update the local state until the response.

Another cool thing that you can find in my application is a datepicker component, use this to choose a due date on your new todo! I could not find any documentation on how to actually customize the datepicker, but I was determined to do it, it took me some time until I finally found a way by targeting the original classnames in the css files included with the component. I rewrote the styling by adding my own css file after the original one. This is a real combo breaker though since I'm using styled components on the rest of the application. 

I have created one slice for tasks and one for accounts, the accounts slice is not being used at the moment, but the intention is to use it for account/user data. 

When there are no todos to be displayed an empty state component is mounted and x/x tasks + the check all/uncheck all button component is only mounted when there are items in the data base.

### Things to have in mind when using my todo application
- Since there is a REST API implemented all the todos you add can be seen by other visitors
- The REST API doesn't handle batch request, therefor the Check all/Uncheck all funcitonality is only updating locally and is not sent to the API.
- When posting a new todo the list is updated locally instantly, there is a delay of a few seconds until the GET request is complete and the list is rendered again with the data from the API. Until this GET request is finished any updates to the new item are not sent to the API. Please allow a few seconds to pass if you need to make changes to your recently posted todo.

### There are several features and tweekings that I will continue with
- Continue investigation on batch requests to the API
- Functionality to also edit the due date when editing an item
- Implementing a color theme drop down in the header
- Filter option on complete: false/true
- Investigate how to turn the datepicker into a styled component
- Use the account slice for account/user information

## View it live

View the todo application live here: https://elated-gates-0c365e.netlify.app/


Thank you for reading! 
