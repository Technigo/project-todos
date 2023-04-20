/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '19asdfiuhas0823hjkadsh809',
      content: 'Do laundry',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh810',
      content: 'Code some more',
      isChecked: false
    },
    {
      id: '19asdfiuhas0823hjkadsh811',
      content: 'Eat ice cream',
      isChecked: false
    }
  ]
};

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store
    // second argument references the data that is passed down from a component
    addItem: (store, action) => {
      // console.log('action:', action);
      // console.log('action.payload:', action.payload);
      // console.log('store:', store);
      store.items = [...store.items, action.payload];
    },
    removeItem: (store, action) => {
      // The data coming in is the unique id connected to the delete button clicked
      const id = action.payload;
      console.log('id:', id)
      console.log('action.payload:', action.payload)

      // We make a new copy to avoid mutating the original state array
      const newArray = store.items;

      // We create a condition that the id of the selected element shall match the id coming in from the delete button
      const condition = (element) => element.id === id;
      console.log('condition', condition)

      // Now we want to take the index of the first item we find in the array that satisfies the condition above
      // If it was 'Eat ice cream', then we would get index 2
      const foundIndex = newArray.findIndex(condition);
      console.log('foundIndex', foundIndex);

      // Now we have found the object we want to delete, and use splice to do it
      // What we are saying here is that we look in newArray for the foundIndex and remove 1.
      // In the case of 'Eat ice cream', it would read: newArray.splice(2, 1)
      // Which would mean, start at index 2 and remove 1 item.
      // newArray.splice(foundIndex, 1);

      console.log(
        'newArray.splice(foundIndex, 1)',
        newArray.splice(foundIndex, 1)
      )

      store.items = newArray.splice(foundIndex, 1);

      // Here we want to filter out the items
      // And return a new state without said item
      // store.items = store.items.filter((item) => item.id !== action.payload.id);
      // console.log('store:', store);
      // console.log('action.payload:', action.payload);
    },
    removeAll: (store) => {
      // Im not mutating this
      store.items = []
    },
    handleCheck: (store, action) => {
      const { id } = action.payload;
      console.log('id:', id)
      // const itemExists = store.items.find((item) => item.id === id); blev muterbart
      const newArray = store.items
      const indexOfObject = newArray.findIndex((item) => item.id === id)
      if (indexOfObject > -1) {
        newArray[indexOfObject].isChecked = !newArray[indexOfObject].isChecked
        store.items = newArray
      }
      // console.log('action.payload:', action.payload, 'itemExists.isChecked:', itemExists.isChecked)
    }
  }
});
