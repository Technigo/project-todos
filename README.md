# MyDay-Todo

**Mission:** 

*Create a todo application using React Redux*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 Partial
- ⚫ Partial


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```


This app has been generated using `create-react-app`.
> This app uses the following npm packages that are not included in the `create-react-app`:
> * [Material UI](https://material-ui.com/)
> * [React Redux](https://redux.js.org/)
> * [React Router](https://reactrouter.com/)
> * [redux-localstorage-simple](https://www.npmjs.com/package/redux-localstorage-simple)
> * [slugify](https://www.npmjs.com/package/slugify)
> * [uniqid](https://www.npmjs.com/package/uniqid)
> * [moment](https://momentjs.com/)

**To start the project**

```
$ cd code 
$ npm start
```
<br>

## ✅ Features ✅
***
*The following are the main features of this application:*
  
  * Application is **responsive**
  * Application has dynamic **side navigation**; based on user created lists
  * Application saves and loads the redux state using **localStorage**
  * The application contains **todo list pages** (either the default list or any amount of user created lists)
  * User can:
    * create a task on a list page.
    * toggle completed status of each task
    * delete or move task to another list
    * create new lists (semantically displayed as Projects)
    * delete projects
    * clear/delete all tasks available in a list

<br>

## 💭 Reflections 💭
***
I had a great time making this application. Since I already felt slightly comfortable with Redux I wanted to take the opportunity to use some new libraries in conjunction with redux. I knew I wanted to base my design off of Microsofts Todo application, so that meant that it would be a good idea to use material design. I found Material UI component-library and spent the first day just learning everything I could about that.
In general there was no major issue with development. I had a clear vision from the start and spending time with pre-production was super helpful and made the work very easy to follow! 😄

<br>

Issues that came up:
- I was a bit unsure if I was in a good way accessing the state data in my reducer actions. I seem to be using a lot of find() functions. It works, but maybe there is a more streamlined way to do it?


If I were to continue on this project / start over I would:
- Add more functionality
- Perhaps refactor the `tasks` store data structure. There may be a better way to do this so I avoid using to many find() functions. OR I actually did it in a best practice way and I just don't know it. 

<br>

***

## View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/2d111940-166e-4726-90cc-86f62d0536f8/deploy-status)](https://app.netlify.com/sites/myday-todo/deploys)

https://myday-todo.netlify.app/
