# Project Todos

Todo app built in React and Redux.

## The problem

Started off in Figma analyzing the requirements, where I designed the todo app and created the flow for the user stories: add todo, update todo to completed, delete todo and update todo to uncompleted.

Figma sketch: https://www.figma.com/file/SVSUTC2GEtDS5HH7dDLpI2/Annika's-to-dos?node-id=6%3A0

Figma user story flow: https://www.figma.com/proto/SVSUTC2GEtDS5HH7dDLpI2/Annika's-to-dos?node-id=29%3A117&scaling=min-zoom

Thereafter I started to plan and discuss the store and reducer: what actions should be there looking at the requirements. I ended up with three actions: add todo, delete todo and update todo to either complete or uncomplete depending on the current complete value. Next was planning of the component structure, and styling approach.

Now coding! After rendering the initial state todos, I coded one action at a time until they were all in place. Styling happened last with a mobile first approach and using styled components.

Next up: put more time into styling and make it responsive (look better on desktop and tablet), create custom alerts using Sweet Alert when clicking on the removal button for a todo, and when trying to add an empty todo.

## View it live

https://angry-goldberg-3ffa30.netlify.app/
