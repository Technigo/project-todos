// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import todos from 'reducers/todos';
// import styled from 'styled-components'

// const DeleteTask = () => {
//   const dispatch = useDispatch()
//   //   const id = useSelector((store) => store.todos.items.id)

//   //   const DeleteToDo = () => {
//   //     dispatch(todos.actions.removeToDo({
//   //       id
//   //     }))
//   //   }
//   const onDeleteToDoButtonClick = (toDoIndex) => {
//     dispatch(todos.actions.removeToDo(toDoIndex))
//   }

//   return (
//     <RemoveTask onClick={() => onDeleteToDoButtonClick()} type="button">❌</RemoveTask>
//   )
// }

// export default DeleteTask

// const RemoveTask = styled.button`
//     background-color: transparent;
//     border: none;
//     &:hover {
//         transform: scale(1.3);
//     }
//     `