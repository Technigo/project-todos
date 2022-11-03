import { createSlice } from '@reduxjs/toolkit';

import amazing from '../Assets/cat/amazing.png';
import angel from '../Assets/cat/angel.png';
import bored from '../Assets/cat/bored.png';
import dead from '../Assets/cat/dead.png';
import devil from '../Assets/cat/devil.png';
import dizzy from '../Assets/cat/dizzy.png';
import sleeping from '../Assets/cat/sleeping.png';
import smart from '../Assets/cat/smart.png';
import smirking from '../Assets/cat/smirking.png';
import stressed from '../Assets/cat/stressed.png';
import surprised from '../Assets/cat/surprised.png';
import typing from '../Assets/cat/typing.png';

const cat = createSlice({
  name: 'cat',
  initialState: {
    amazing,
    angel,
    bored,
    dead,
    devil,
    dizzy,
    sleeping,
    smart,
    smirking,
    stressed,
    surprised,
    typing,
    catOfTheHour: angel,
    previousCat: angel
  },
  reducers: {
    changeCat: (store, action) => {
      //   console.log('action.payload changeCat:', action.payload);

      // action.payload is either the name (key) of the image, or the image itself
      // if action.payload is the key, newCat gets matched to the corresponding object in the store
      // otherwise action.payload is the image, so it can be used directly for newCat
      const newCat = store[action.payload] || action.payload;
      store.catOfTheHour = newCat;
    },
    changeCatAndPrevious: (store, action) => {
      store.previousCat = store.catOfTheHour;

      store.catOfTheHour = store[action.payload];
      //   setTimeout(() => {
      //     store.catOfTheHour = store.previousCat;
      //   }, 2000);
    }
    // updatePreviousCat: (store) => {
    //   store.previousCat = store.catOfTheHour;
    // }
  }
});

export default cat;
