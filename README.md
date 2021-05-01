# Project Todos

Building a app with todo's in Js with React/Redux

## The problem

I started this project with getting the a basic tasklist and input as well as setting up a store with the most essential reducers and states. First focus was just that fundamental fuction of the user being able to add and then tick tasks when done. 
After this I started setting up more components and reducers to add more advanced features. The project developed reducer by reducer and functionality piece by piece. 

Most challenging was the date/time picker, as the basic js new Date has compability/parsing issues with different iOS. I first used React moment - which is very smooth, but decided to remove it after finding out that it's no longer maintained. That wasn't the biggest problem I had with the datepicker though - getting it to not get undefined when just choosing date and not choosing time (wanting a default time) got me stuck for a long time. 
The solution was very easy in the end, I just used a let variable to set the value time instead of state as the main problem was async. 

Another issue has been getting the filters, categories and sorting to work in every possible situation. Specailly adding a new task made these be ignored. I solved this by storing the active filter, category and sort in the store as variables/arrays.

Looking back, I should have tried to think more of the end result and how to get all the functionality of the app to work as intended. Now, I mostly came up with and added things along the way.

## View it live

https://paulines-todos.netlify.app/

## Assets 
<div>Icons made by <a href="" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Header image by <a href="https://unsplash.com/@nordwood" title="Nordwood">Nordwood</a> from <a href="https://unsplash.com" title="Unsplash">www.unsplash.com</a></div>
<div>Background image by <a href="https://unsplash.com/@impatrickt" title=" Patrick Tomasso"> Patrick Tomasso</a> from <a href="https://unsplash.com" title="Unsplash">www.unsplash.com</a></div>
