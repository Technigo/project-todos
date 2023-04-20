import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
    { id: '0',
      name: 'Rain clothes',
      isChecked: false },
    { id: '1',
      name: 'Cap',
      isChecked: true },
    { id: '3',
      name: 'Sun Lotion',
      isChecked: true }
  ]
}

const clothes = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
        addNewClothes: (store, action) => {
            const { input, dueDate } = action.payload

            const newClothes = {
                text: input,
                id: useRevalidator,
                complete: false,
                postedTime: moment().calender()
            }

            store.clothes = [...store.clothes, newClothes];
        },

        checkComplete: (store, action) => {
            const { clothesId } = action.payload
            store.clothes.forEach((clothes) => {
              if (clothes.id === clothesId) {
                clothes.complete = !clothes.complete
              }
            });
        },

        deletingClothes: (store, action) => {
            const { clothesId } = action.payload
            const filteredList = store.clothes.filter((clothes) => clothes.id !== clothesId)
            store.clothes = filteredList
            if (store.clothes.length === 0) {
                store.isEmpty = true
            }
        }
    }
})