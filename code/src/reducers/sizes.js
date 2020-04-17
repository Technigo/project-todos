import {createSlice} from '@reduxjs/toolkit'

const myInitialState = {
    screenSize: {size:320}
}
export const sizes = createSlice({
    name:'sizes',
    initialState: myInitialState,
    reducers: {
        changeSize: (state, action) => {
            if (action.payload >= 860){
              state.screenSize.size = 800
            }
            else if (action.payload > 320){
              state.screenSize.size = action.payload*1.05
            }
            else {
            state.screenSize.size =320
            }
        },
        
//console.log(array1.findIndex(isLargeNumber));
        
    }

})