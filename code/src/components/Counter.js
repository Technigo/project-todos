// /* eslint-disable max-len */
// import React from 'react'
// import { useSelector } from 'react-redux'
// import styled from 'styled-components'

// const CounterContainer = styled.section`
//   @media (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `

// const CounterText = styled.div`
//   background: linear-gradient(0.25turn, #EED6C4, linen);
//   font-family: 'Quicksand', sans-serif;
//   border: 4px solid linen;
//   border-radius: 4px;
//   font-size: 16px;
//   padding-left: 8px;

//   @media (min-width: 768px) {
//     width: 508px;
//     height: 200px;
//   }
// `

// const Status = styled.h3`
//   font-size: 24px;
//   text-transform: uppercase;
//   font-weight: bold;
//   color: #6B4F4F;
//   letter-spacing: 2px;
//   padding-left: 20px;
// `

// const StatusText = styled.p`
//   @media (min-width: 768px) {
//     padding-left: 40px;
//     padding-top: 4px;
//   }
// `

// const CounterNumbers = styled.span`
//   font-weight: bold;
//   font-size: 18px;
//   color: darkslateblue;
//   border: 2px solid white;
//   padding-right: 5px;
//   padding-left: 5px;
//   border-radius: 4px;
//   background: #DDBEBE;
// `

// const WhenEmptyList = styled.p`
//   text-align: center;
//   font-size: 18px;
//   padding-top: 18px;
// `

// const NoTodosTitle = styled.span`
//   font-weight: bold;
// `

// const NoTodosText = styled.p`
//   text-align: center;
//   letter-spacing: 1px;
//   line-height: 40px;
// `

// const ToDoCounter = () => {
//   const allTodos = useSelector((store) => store.todos.items)
//   const remainingTodos = allTodos.filter((todo) => todo.isDone === true)

//   if (allTodos.length > 0) {
//     return (
//       <CounterContainer>
//         <CounterText>
//           <Status>Your list</Status>
//           <StatusText>
//                   There are <CounterNumbers>{allTodos.length}
// </CounterNumbers> items on your to do-list.
//           </StatusText>
//           <StatusText>
//                   Currently <CounterNumbers>{remainingTodos.length}
// </CounterNumbers> of them are completed.
//           </StatusText>
//         </CounterText>
//       </CounterContainer>
//     )
//   } else if (remainingTodos.length === 0) {
//     return (
//       <CounterContainer>
//         <CounterText>
//           <WhenEmptyList>
//             <NoTodosTitle>There is nothing to do right now</NoTodosTitle>
//                   &nbsp;Might as well go for a latte&nbsp;
//             <span role="img" aria-label="coffee emoji">☕️</span>
//           </WhenEmptyList>
//           <NoTodosText>Start adding to the list when you feel like it!
//           </NoTodosText>
//         </CounterText>
//       </CounterContainer>
//     )
//   }
// }
// // &nbsp; is a special HTML entity that represents a non-breaking space.
// // It is used to add space between two elements without allowing the browser
// // to break the line between them.

// export default ToDoCounter