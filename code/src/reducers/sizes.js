import { createSlice } from '@reduxjs/toolkit';

const myInitialState = {
	screenSize: 300
};
export const size = createSlice({
	name: 'size',
	initialState: myInitialState,
	reducers: {
		changeSize: (state, action) => {
			if (action.payload >= 860) {
				state.screenSize = 800;
			} else if (action.payload > 300) {
				state.screenSize = action.payload * 0.95;
			} else {
				state.screenSize = 300;
			}
		}

		//console.log(array1.findIndex(isLargeNumber));
	}
});
