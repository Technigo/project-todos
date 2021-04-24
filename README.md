# Project Todos

As part of the TECHNIGO Boot Camp week 15 the assignment was to build a “Do To” application using Redux (Redux toolkit, Slices, Reduces & Actions).

## The problem

As part of the TECHNIGO Boot Camp week 15 the assignment was to build a “Do To” application using Redux (Redux toolkit, Slices, Reduces & Actions).

General requirements: Your app should be able to list “To Do” tasks, and with the ability to mark them as complete or incomplete. You should be able to add and remove tasks as well as showing some kind of task counter.

This was my very first deep dive into Redux - creating slices, reducers and actions. I´m really fond of the idea of the store, and how useful it is to work with. I need to get more used to the flow and interaction between the functionalities and I am truly looking forward to practice this a bit more.

I used the ‘uniqueid’ package to assign the new “To Do”s a unique id, and the ‘dayjs’ package to implement the current date format I wanted. The little bin icon for when deleting a task is generated from the ‘icons’ library. It is a lot of fun starting to get a bit more used to libraries, and discovering what they can do for you. I set up the task counter displaying how many tasks there are in total, and how many out of those are completed when checked/considered done.

In terms of CSS I decided to use ‘styled-components’, I find it handy to deal with a separate chunk of styling for each component. However, I´m not yet as confident with ‘styled-components’ as I am with vanilla CSS, targeting pseudo elements etc. My visual theme was to make a scribbly, handwritten notepad – the highlighted green maker pen effect especially was a lot of fun to create. I wanted my “To Do”s to generate Post It like notes, and the future ambition is to also give them random tilts and colors (pink, yellow, green and blue).

I would like to come back to this project and reconstruct my code a bit more too, breaking it down to smaller components (the TodoList component in particular). A future goal would be to add a “Clear All”-button and an editing function to existing notes. I would also like to create a limited characters function, as the user currently can add as much text content as they like to the input. Last but not least it would be awesome to learn how to store the content input, so the Post It´s are all saved on page reload.

## View it live

To view the project live, please follow this link: https://reverent-engelbart-256280.netlify.app/
