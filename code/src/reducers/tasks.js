import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import uniqid from 'uniqid'
import $ from 'jquery'

import { API_TODO, API_DELETE, API_EDIT } from '../reusable/urls'

export const fetchData = () => {
  return (dispatch) => {

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://todoapi-b7cf.restdb.io/rest/todo-api",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "6084310d28bf9b609975a622",
        "cache-control": "no-cache"
      }
    }

    $.ajax(settings).done((res) => {
      dispatch(tasks.actions.handleFetchedData(res))
    })
  } 
}

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    allChecked: false,
  },
  reducers: {
    handleFetchedData: (store, action) => {
      const addFetchedData = action.payload.map(item => {
        return { _id: item._id, id: item.id, text: item.text, complete: item.complete, created: item.created, editMode: item.editMode, dueDate: item.dueDate }
      })

      const sortedData = addFetchedData.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate)
      })

      store.items = sortedData
    },

    toggleComplete: (store, action) => {
      const findItem = store.items.find(item => item.id === action.payload)

      const jsonData = { "complete": `${!findItem.complete}` } 
      const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${API_EDIT(findItem._id)}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6084310d28bf9b609975a622",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsonData)
      }
      $.ajax(settings).done((res) => {
      })

      const updatedCompletion = store.items.map((item) => {
        if (item.id === findItem.id) {
          return {
            ...item,
            complete: !item.complete
          }
        } else {
          return item
        }
      })
      store.items = updatedCompletion

      const checkAllChecked = store.items.every(item => item.complete === true)
      store.allChecked = checkAllChecked
    }, 

    postNewTodo: (store, action) => {
      const {description, dueDate} = action.payload
      const uniqId = uniqid()
      const createdWhen = moment().format()

      const newTodo = { "id": `${uniqId}`, "text": `${description}`, "complete": `${false}`, "created": `${createdWhen}`, "editMode": `${false}`, "dueDate": `${dueDate}` }
      const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${API_TODO}`,
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6084310d28bf9b609975a622",
          "cache-control": "no-cache"
        }, 
        "processData": false,
        "data": JSON.stringify(newTodo)
      }
      $.ajax(settings).done((res) => {
      })
      
      const updateItems = [...store.items, { _id: '', id: uniqId, text: description, complete: false, created: createdWhen, editMode: false, dueDate: dueDate }]
      const sortItems = updateItems.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate)
      })
      store.items = sortItems
    },

    removeTodo: (store, action) => {
      const findItem = store.items.find(item => item.id === action.payload )

      const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${API_DELETE(findItem._id)}`,
        "method": "DELETE",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6084310d28bf9b609975a622",
          "cache-control": "no-cache"
        }
      }

      $.ajax(settings).done((res) => {
      })

      const filterList = store.items.filter(item => item.id !== action.payload)
      store.items = filterList
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
      const findItem = store.items.find(item => item.id === action.payload.id)

      const jsonData = { "text": `${action.payload.description}` } 
      const settings = {
        "async": true,
        "crossDomain": true,
        "url": `${API_EDIT(findItem._id)}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6084310d28bf9b609975a622",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsonData)
      }
      $.ajax(settings).done((res) => {
      })

      const updatedDescription = store.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.description,
            editMode: !item.editMode
          }
        } else {
          return item
        }
      })
      store.items = updatedDescription
    },

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
