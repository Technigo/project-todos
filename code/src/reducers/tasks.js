import {createSlice} from '@reduxjs/toolkit'

export const taskList = [
    { id:'a1c2' , taskInput: { input: 'Finish the asignment'}, tag:'study', isDone: false},
    { id:'b2d3' , taskInput: { input: 'Hit the gym'}, tag:'gym', isDone: false},
    { id:'e3f6' , taskInput: { input: 'Buy milk'}, tag:'shopping', isDone: false},
]

//with local state (useState), the taskText has an object as property
// { id: '123', taskText: { input: "buy carrots"}, isDone: false }
// so in this case, easier to just add the tags into the input object
// { id: '123', taskInput: { input: "buy carrots", tags: "shopping" }, isDone: false }

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: taskList,
      },
    reducers: {
        addTask: (store, action) => {
            // const { taskInput, tag } = action.payload

            const newTodo = {
                id: Date.now().toString(),
                taskInput: action.payload,
                tag: action.payload,
                isDone: false
            }
            store.items = [...store.items, newTodo];
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

// <form onSubmit={onContentSubmit}>
// <label htmlFor="content">
//   <textarea
//     rows="3"
//     placeholder="Type anything!"
//     name="content"
//     value={content.content}
//     onChange={onContentValueChange}
//   />
// </label>

// <label htmlFor="author">
//   <input
//     type="text"
//     placeholder="Sign your name"
//     name="author"
//     value={content.author}
//     onChange={onContentValueChange}
//   />
// </label>
// <button type="submit">Submit</button>
// </form>