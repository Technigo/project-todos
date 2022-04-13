import { createSlice } from '@reduxjs/toolkit'

export const taskList = [
    { id: 'a1c2', task: 'Finish the asignment', tag: 'study', isDone: false },
    { id: 'b2d3', task: 'Hit the gym', tag: 'gym', isDone: false },
    { id: 'e3f6', task: 'Buy milk', tag: 'shopping', isDone: false },
]

//with local state (useState), the taskText has an object as property
// { id: '123', taskText: { input: "buy carrots"}, isDone: false }
// so in this case, easier to just add the tags into the input object

//Ideally, It should look like tthis
// { id: '123', taskInput: [{ input: "buy carrots", tags: "shopping" }], isDone: false }

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList,
    },
    reducers: {
        addTask: (store, action) => {
            const { task, tag } = action.payload
            const newTodo = {
                id: Date.now().toString(),
                task: task,
                tag: tag,
                isDone: false
            }
            store.items = [...store.items, newTodo];
        },
        removeTask: (store, action) => {
            const updatedTasks = store.items.filter(
                (item) => item.id !== action.payload
              )
            store.items = updatedTasks
        },
        toggleDoneTask: (store, action) => {
            store.items.forEach((item) => {
                if (item.id === action.payload) {
                  item.isDone = !item.isDone;
                }
              })
        }
    }
})



// const onContentValueChange = (event) => {
//   const { name, value } = event.target;
//   setContent((prev) => {
//     return {
//       ...prev,
//       [name]: value
//     };
//   });
// };

