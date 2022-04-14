# Project Todos

This week, I deep dived into global states with Redux approach.

## The problem

I struggled a lot to filter tasks based on status.
I created a new array (filter) that stores a copy of objects of all tasks.
Each time a task is toggled as done, the object is added to this new array (filter).

This approach creates bugs when ALL of the tasks are either toggled or not toggled (all tasks have the same status) --> All of them will show in all filters.

I'm continuing to explore different approaches and to fix this bug. However, when you have several tasks that don't have the same status, the task sorting works like a charm!

## View it live

https://minimal-task-tracker.netlify.app/

