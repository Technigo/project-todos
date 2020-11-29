import { createSlice } from "@reduxjs/toolkit"

// Initial state of the object.
const initialState = {
  items: [
    {
      isDone: true,
      text: "Download app"
    },
    {
      isDone: false,
      text: "Mark something as 'done'"
    },
    {
      isDone: false,
      text: "Delete a task"
    },
    {
      isDone: true,
      text: "Read this text"
    },
    {
      isDone: false,
      text: "Add a new task"
    },
    {
      isDone: false,
      text: "Celebrate 🥳"
    }
  ]
}

const randomTasks = [
  "Buy milk",
  "Pick up the kids from daycare",
  "Turn off the stove",
  "Call Brian",
  "Vacuum that spot you always forget to vacuum",
  "Eat a fruit",
  "Drink a glass of water",
  "Cancel that subscription you've been meaning to cancel",
  "Unsubscribe to e-mails",
  "Clean your fridge",
  "Sign those adoption papers",
  "Pet a dog",
  "Come up with an excuse to not go to that party",
  "Organize your receipts",
  "Ask that person you like out",
  "Hug a stranger",
  "Yell at a cloud",
  "Burn all your pants",
  "Turn on the stove",
  "Smell a baby",
  "Water your plants",
  "Recycle",
  "Clear out your cupboard",
  "Get a new nemesis",
  "Cancel someone",
  "Defund the police",
  "Call a relative",
  "Learn crochet",
  "Flip your mattress",
  "Flee the country",
  "Download Tiktok and see what these darned kids are up to these days",
  "Take a walk in the rain",
  "Spoil the ending of a movie for someone",
  "Floss",
  "Go commando for a day",
  "Lick a wall and see what it tastes like",
  "Run with scissors",
  "Overthrow the government",
  "Read a book",
  "Visit the Bermuda Triangle",
  "Run through an airport to stop someone you love from leaving",
  "Walk away from an explosion",
  "Fight a bear",
  "Hack into the mainframe",
  "(╯°□°）╯︵ ┻━┻"
]

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Note: Most reducer will contain 'state' and 'action'. 'state' represents the 'todo' OBJECT.

    // >>> DELETE TODO <<<
    deleteTodo: (state, action) => {
      // The action.payload is WHATEVER WE SEND IN to the function. Looking at the item.js file, we're sending in (props.index)
      // This defines the "index" variable as the PAYLOAD, which is the props.index. Breakthrough, yeeeah!
      const index = action.payload
      // Removes the item from the array
      state.items.splice(index, 1)
    },

    // >>> ADD TODO <<<
    addTodo: (state, action) => {
      // Define "newTask" as an object – not done, and with "text" as the payload (what's being sent in to the function).
      const newTask = {
        isDone: false,
        text: action.payload
      }
      state.items.push(newTask)
    },

    // >>> REMOVE COMPLETED <<<
    removeCompleted: (state) => {
      // Filter the list and return only what's "not done".
      state.items = state.items.filter(item => item.isDone === false)
    },
    
    // >>> REMOVE ALL <<<
    removeAll: (state) => {
      // Filter the list and return only what's "not done".
      state.items.splice(0, state.items.length)
    },

    // >>> ADD RANDOM TODO <<<
    addRandomTodo: (state) => {
      // Define "text" as a random string from the randomTasks array.
      const text = randomTasks[Math.floor(Math.random()*randomTasks.length)];
      const newTask = {
        isDone: false,
        text: text
      }
      state.items.push(newTask)
    },

    // >>> TOGGLE IS-DONE <<<
    toggleDone: (state, action) => {
      const index = action.payload.index

      // Point to the state and set the isDone property to "true".
      if (state.items[index].isDone === true) {
        state.items[index].isDone = false
      } else {
        state.items[index].isDone = true
      }

    }
  }
})