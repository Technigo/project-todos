import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filters: [{filterBy:"Reset"}],
  sort: [{sortBy:""}],
  category: [{categorizeBy: "all"}],
  updatedTodos: [],
  updateFilters: [],
  updateSort: [],
  updateCategory: []
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createNewTodo: (store, action) => {
      const { task, time, deadline, category, overdue, isTimed } = action.payload;
      store.items.push({
        id: store.items.length + 1, //sets id
        description: task, //task text
        isComplete: false, //completed or not
        completedAt: "", //time completed
        hidden: false, //task shown or not (used with filterings/categories)
        createdAt: time, //time created
        deadline: deadline, //if theere is a due time on the task it's stored here
        overdue: overdue,
        isTimed: isTimed,
        category: category, // if the task has a category it's stored here
      });
    },
    toggleComplete: (store, action) => {
      const { id, time } = action.payload;

      store.updatedTodos = store.items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
          item.completedAt = time;

          /* if the filter is on "done" the new task will be hidden*/
          store.filters[0].filterBy === "isComplete" && store.filters[0].value === item.isComplete
          ? item.hidden= false
          : item.hidden=true
          return item;
          
        } else {
          return item;
        }
      });
      store.items = store.updatedTodos;
    },
    categorize: (store, action) => {
      const { categorizeBy } = action.payload;
      store.updatedTodos = store.items.map((task) => {
        /*checking both category and filter to be sure both applies even on category update*/
        if (categorizeBy === "all" && task[store.filters[0].filterBy] === store.filters[0].value) {
          return { ...task, hidden: false };
        }
        task.category[0] === categorizeBy && task[store.filters[0].filterBy] === store.filters[0].value
          ? (task.hidden = false)
          : (task.hidden = true);
        return task;
      });

      store.updateCategory = [];
      store.updateCategory.push({ categorizeBy: categorizeBy });
      
      store.category = store.updateCategory;
      store.items = store.updatedTodos;
    },
    sortTodos: (store, action) => {
      const { sortBy, order } = action.payload;
      store.updatedTodos = store.items.map((task) => task);

      //sort
      if (order) {
        if (sortBy === "isComplete") {
          store.updatedTodos.sort(
            (a, b) => Number(b[sortBy]) - Number(a[sortBy])
          );
        } else {
          store.updatedTodos.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
        }
        //reverse sort
      } else {
        if (sortBy === "isComplete") {
          store.updatedTodos.sort(
            (a, b) => Number(a[sortBy]) - Number(b[sortBy])
          );
        } else {
          store.updatedTodos.sort((a, b) => (b[sortBy] > a[sortBy] ? 1 : -1));
        }
      }

      store.updateSort = [];
      store.updateSort.push({ sortBy: sortBy, order: order });
      store.sort = store.updateSort;

      store.items = store.updatedTodos;
    },
    filterTodos: (store, action) => {
      const { filterBy, value } = action.payload;
      store.updatedTodos = store.items.map((task) => {
        if (
          task[filterBy] === value &&
          (store.category[0].categorizeBy === task.category[0] || //only apply on tasks in the active category
            store.category[0].categorizeBy === "all") //or if category is all then apply
        ) {
          task.hidden = false;
        } else {
          task.hidden = true;
        }
        return task;
      });

      store.updateFilters = [];
      store.updateFilters.push({ filterBy: filterBy, value: value });

      store.filters = store.updateFilters;
      store.items = store.updatedTodos;
    },
    resetFilter: (store) => {
      store.updatedTodos = store.items.map((task) => {
        return { ...task, hidden: false };
      });

      store.items = store.updatedTodos;
    },
    removeTodo: (store, action) => {
      const { task } = action.payload;
      store.updatedTodos = store.items
        .filter((item) => item.id !== task)
        //using map  and index to reset the id's when tasks has been removed
        .map((item, i) => {
          return { ...item, id: i + 1 };
        });
      store.items = store.updatedTodos;
    },
    completeAll: (store) => {
      store.updatedTodos = store.items.map((item) => {
        return { ...item, isComplete: true };
      });
      store.items = store.updatedTodos;
    },
    clearAllCompleted: (store) => {
      store.updatedTodos = store.items
        .filter((item) => !item.isComplete)
        .map((item, i) => {
          return { ...item, id: i + 1 };
        });
      store.items = store.updatedTodos;
    },
  },
});
