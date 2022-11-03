// import { useSelector, useDispatch } from 'react-redux';
// import cat from 'reducers/cat';

// export const catMood = (amountOfTasks) => {

// }

// export const temproaryChangeCat = (newCat) => {
//   const dispatch = useDispatch();
//   const originalCat = useSelector((store) => store.cat.catOfTheHour);
//   console.log(originalCat);
//   dispatch(cat.actions.changeCat(newCat));

//   setTimeout(() => {
//     dispatch(cat.actions.changeCat(originalCat));
//   }, 2000);
// };

// // Re-usable function for converting an excitement value to a corresponding string
// export const headerText = (taskListLength) => {
//   switch (true) {
//     case taskListLength < 0:
//       return `You have ${taskListLength} ${taskListLength === 1 ? 'task' : 'tasks'}`;
//     case taskListLength < 4:
//       return 'Parents of 10 kids';
//     case taskListLength < 60:
//       return 'Christmas is OK';
//     case taskListLength < 80:
//       return 'I like the sparkling lights';
//     case taskListLength < 95:
//       return 'Rudolph';
//     default:
//       return 'Santa Claus';
//   }
// };
