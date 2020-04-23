import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //det vi behöver för att göra appen, alltså en lista på sakerna
  //hur det ska se ut det vi kör in i storen
  list: {
    //namnet på listan
    name: 'Test list',
    //innehållet, aLLtså tasksen
    items: [
      // varje task är ett object som har en description och en boolean
      {
        description: 'Water the plants',
        done: false
      },
      {
        description: 'Bake a cake',
        done: false
      }
    ]
  }
}

export const todos = createSlice({
  name: 'todos',

  initialState: initialState,
  reducers: {
    //FATTAR INTE DETTA State är current state, att den tar den uppdaterade.
    //action will ta med sig det vi får in från dispatchen
    addTodo: (state, action) => {
      const { itemInfo } = action.payload
      //detta uppdaterar staten med det vi kört in. letar upp list i staten, sen listan, sen i items sätter den in ett nytt obejkt
      state.list.items.push(itemInfo)
    },
    //remove todo
    //set done
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.list.items[itemIndex].done = done
    },

    removeTask: (state, action) => {
      const { itemIndex } = action.payload
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      )
    },
    deleteAll: () => {
      return initialState
    },
  }
})