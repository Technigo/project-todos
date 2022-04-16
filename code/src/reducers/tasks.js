import { createSlice } from "@reduxjs/toolkit";

const data= []

export const tasks = createSlice({
name:'tasks', //by convention same name as fuction but not same thing
initialState: {
  items:data,
},
reducers: {
    //functions
    toggleItem:(store, action)=>{
        store.items.forEach(item=>{
            if(item.id===action.payload){
                item.isDone=!item.isDone
            }
        })
    },
    deleteTask:(store, action)=>{
    store.items.splice(action.payload, 1)
    },

    addTask:(store,action)=>{
    store.items.push(action.payload)    
    },

    removeAll:(store,action)=>{store.items=[]}  
},
})