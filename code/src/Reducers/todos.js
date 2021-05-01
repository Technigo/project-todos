import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filters: [{ filterBy: "Reset" }],
  sort: [{ sortBy: "" }],
  category: "all",
  updatedTodos: [],
  updatefilters: [],
  updateSort: [],
  updateCategory: [],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createNewTodo: (store, action) => {
      const {
        task,
        time,
        deadline,
        category,
        overdue,
        isTimed,
      } = action.payload;
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

          /* if the filter is on reset or if the filter matches the tasks should show */
          store.filters[0].filterBy === "Reset" ||
          item[store.filters[0].filterBy] === store.filters[0].value
            ? (item.hidden = false)
            : (item.hidden = true);

          return item;
        } else {
          return item;
        }
      });

      store.items = store.updatedTodos;
    },
    categorize: (store, action) => {
      store.category = action.payload;
      store.updatedTodos = store.items.map((task) => {
        if (store.category === "all" || task.category[0] === store.category) {
          return { ...task, hidden: false };
        }
        return { ...task, hidden: true };
      });

      //update individial tasks
      store.items = store.updatedTodos;
    },
    sortTodos: (store, action) => {
      const { sortBy, order} = action.payload;
      store.updatedTodos = store.items.map((task) => task);
       
        if (sortBy === "isComplete") {
          store.updatedTodos.sort((a, b) => order 
          ? Number(b[sortBy]) - Number(a[sortBy])
          : Number(a[sortBy]) - Number(b[sortBy]))
        } else {
          store.updatedTodos.sort((a, b) =>  a < b ? 1 : -1);
        }

      //update sorting value
      store.updateSort = store.sort.map((sort) => {
        return { ...sort, sortBy: sortBy, order: order };
      });
      store.sort = store.updateSort;

      //update items in a sorted order
      store.items = store.updatedTodos;
    },
    filterTodos: (store, action) => {
      const { filterBy, value } = action.payload;
      store.updatedTodos = store.items.map((task) => {
        if (
          task[filterBy] === value &&
          (store.category === task.category[0] || //only apply on tasks in the active category
            store.category === "all") //or if category is all then apply
        ) {
          task.hidden = false;
        } else if (filterBy === "Reset") {
          task.hidden = false;
        } else {
          task.hidden = true;
        }
        return task;
      });

      //update filter value
      store.updatefilters = store.filters.map((filter) => {
        return { ...filter, filterBy: filterBy, value: value };
      });
      store.filters = store.updatefilters;

      //update items show/hide depending on filter
      store.items = store.updatedTodos;
    },
    resetFilter: (store) => {
      store.updatedTodos = store.items.map((task) => {
        if (store.category === task.category[0] || store.category === "all")
          return { ...task, hidden: false };
        else return { ...task };
      });

      //update filter value
      store.updatefilters = store.filters.map((filter) => {
        return { ...filter, filterBy: "Reset", value: true };
      });
      store.filters = store.updatefilters;

      //update filtered tasks
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
