# Week 14: Project Todos

This week's project was to build a todo app, my first project using Redux from scratch.

## The problem

I started by creating the reducer and display a basic list of hard coded todos. When I got it right, I started to add some functionalities and pushed myself to add many things in the smoothest and simplest way, as I wanted everything to be on one page. Here are the details I added. The user can:
* add a category and the icon displayed depends on category
* add a deadline (optional) that becomes red when overdue
* delete one todo / delete all completed todos / delete all todos
* toggle between completed/pending for one todo / all todos
* undo delete one todo / delete all todos (but not possible to undo delete all completed todos, so the user can empty the list for real that way)
* display all todos / only completed todos / only pending todos
* search within text (must include search input) and category (must start with search input)
* see the creation timestamp in each todo
* see a count of pending todos / search resulst (depending on search input empty or not)
* sort todos by dragging the handle

I used local storage so the list is not gone when refresing the page. For styling, I used styled components and if I had more time, I would have structured them better. I also left some tiny things in my CSS that I had trouble to incorporate in my styled components.

Overall, I am very proud and happy with what I have achieved. I wanted an app that I would like to use and I was able to do that.

## View it live

Project deployed here: [Moody Todos](https://moody-todos.netlify.app/)
