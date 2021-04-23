import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import uniqid from 'uniqid'

import { API_RAW, API_POST, API_DELETE, API_EDIT } from '../reusable/urls'

export const fetchData = () => {
  return (dispatch) => {
    fetch(API_RAW)
      .then(res => res.json())
      .then(data => dispatch(tasks.actions.handleFetchedData(data)))
  } 
}

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    allChecked: false
  },
  reducers: {
    handleFetchedData: (store, action) => {
      const convertBooleans = (bool) => {
        if (bool === "true") {
          return true
        } else if (bool === "false") {
          return false
        }
      }
        
      const addFetchedData = action.payload.map(item => {
        return { id: item.id, text: item.text, complete: convertBooleans(item.complete), created: item.created, editMode: convertBooleans(item.editMode), dueDate: item.dueDate }
      })

      store.items = addFetchedData
    },

    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            complete: !item.complete,
          }
        } else {
          return item
        } 
      })

      store.items = updatedItems

      const checkAllChecked = store.items.every(item => item.complete === true)
      store.allChecked = checkAllChecked
    }, 

    postNewTodoAPI: (store, action) => {
      const {description, dueDate} = action.payload
      const newTodo = { id: uniqid(), text: description, complete: "'false", created: moment().format(), editMode: "'false", dueDate: dueDate }

      fetch(API_POST, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo)
      })

      fetch('https://sheet.best/api/sheets/aba1602e-a4b5-4108-81d5-285c53b6e8c2?_raw=1')
        .then(res => res.json())
        .then(data => tasks.actions.handleFetchedData(data))

    },

    removeTodo: (store, action) => {
      let itemIndex
      
      store.items.find((item, index) => {
        if (item.id === action.payload) {
          itemIndex = index
        } 
      })

      fetch(API_DELETE(itemIndex), {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => console.log(data))
    },

    toggleEdit: (store, action) => {
      const updatedEditMode = store.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            editMode: !item.editMode
          } 
        } else {
          return item
        }
      })

      store.items = updatedEditMode
    },

    editItemDescription: (store, action) => {
      let itemIndex 
      let updatedValues
      
      store.items.find((item, index) => {
        if (item.id === action.payload.id) {
          itemIndex = index
          updatedValues = { text: action.payload.description, editMode: !item.editMode }
        } 
      })
      console.log(updatedValues)

      fetch(API_EDIT(itemIndex), {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedValues)
      })
    }
    ,

    checkAll: (store) => {
      const updatedCompletion = store.items.map(item => {
        if (item.complete === false) {
          return {
            ...item, 
            complete: true
          } 
        } else {
          return item
        }
      })

      
      store.items = updatedCompletion

      const checkAllChecked = store.items.every(item => item.complete === true)
      store.allChecked = checkAllChecked
    },

    uncheckAll: (store) => {
      const updatedCompletion = store.items.map(item => {
        if (item.complete === true) {
          return {
            ...item,
            complete: false
          }
        } else {
          return item
        }
      })

      store.items = updatedCompletion

      const checkAllChecked = store.items.every(item => item.complete === true)
      store.allChecked = checkAllChecked
    }
  }
})
