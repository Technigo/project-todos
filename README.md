# To-do list site

### Summary

A To-do list site created with React and Redux to help you stay organized and mentally focused.

### Implementation details

Yet another interesting project to work on. Using Redux really makes everything so much easier instead of passing props back and forth between components.

Through out the project I have used the state in many different ways to control the UI. One feature that turned out great is the filter function. In the current implementation the user can filter and show all, completed, uncompleted or pinned todos. If the user selects the completed todos filter and then deletes all todos in that view, the filter will automatically revert back to filter show all, since there are no todos to show any more in the completed todos view. The logic is the same for all filters. If there are no todos to show for a particular filter, that filter is automatically disabled.

A user can create a new todo with any of the different filters selected. If the user for instance creates a new todo when the filter completed is selected, the newly created todo will not show up in the list. Therefore the filter will instantly revert back to the filter show all. The logic is the same for all filters.

Besides a clear all button I've also implemented a button to clear all completed todos (disabled if there are no completed todos).

Logic to be able to pin extra important todos to the top of the list has also been implemented.

For the layout I have used Styled Components (with props) and CSS grid extensively to create a UI that adapts well to different screen sizes in both landscape and portrait mode. I'm really starting so see the real power of CSS grid.

I decided not to style the input checkbox in any way since the refreshed form controls in Chromium 81 looks really good by default. The design refresh is the result of an ongoing collaboration between Microsoft and Google

CSS breakpoints of interest:

- 500px
- 768px

### Technologies used

- JavaScript ES6+
- React
- Redux
- CSS
- Styled Components
- Moment.js
- HTML

### Where can you see it in action?

URL to live site: https://peaceful-wiles-f65d36.netlify.com/
