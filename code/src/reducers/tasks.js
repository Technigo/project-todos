/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '19asdfiuhas0823hjkadsh809',
      name: 'Tvätta',
      isCaught: false
    },
    {
      id: '19asdfiuhas0823hjkadsh809',
      name: 'Gymma',
      isCaught: true
    },
    {
      id: '19asdfiuhas0823hjkadsh809',
      name: 'Hejhejhej',
      isCaught: false
    },
    {
      id: '19asdfiuhas0823hjkadsh809',
      name: 'Köp ett flak',
      isCaught: true
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // "store, action" can be potato, banana, first argument (store) references the state of the store, second argument (action)references the data that is
    // passed down from a component
    addTask: (store, action) => {
      // Mutable way. (varje gång man muterar the state of the store, youll get a warning). MEN detta vill vi inte. Vi vill att det ska vara immutable:
      /*    store.items.push(action.payload); */

      // Immutable way:
      store.items = [...store.items, action.payload]
      // const x = ["a","b","c"]
      // const y = [x, "d"] => [["a","b","c"], "d"]
      // const z = [...x, "d"] => ["a","b","c","d"]
      // const superObject = {a: "test", b:"other test"}
      // const supererObject = {...superObject, c: "third test"}
    }
  }
})

export default tasks;
