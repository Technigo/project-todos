// import { createSlice } from '@reduxjs/toolkit';

// // Store to solve resizing based on window size
// // smallest screen is 320px
// const myInitialState = {
// 	screenSize: 300
// };
// export const size = createSlice({
// 	name: 'size',
// 	initialState: myInitialState,
// 	reducers: {
// 		changeSize: (state, action) => {
// 			if (action.payload >= 860) {
// 				state.screenSize = 800;
// 			} else if (action.payload > 300) {
// 				state.screenSize = action.payload * 0.95;
// 			} else {
// 				state.screenSize = 300;
// 			}
// 		}
// 	}
// });
