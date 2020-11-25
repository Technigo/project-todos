import React from 'react'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {todos} from 'reducer/todos'

// injectGlobal`
//   @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: Roboto, sans-serif;
//   }
//   h1 {
//     font-family: Montserrat;
//   }
// `

const HeadingContainer = styled.div`

`
export const StartHeading = () => {
  const items = useSelector(store => store.todos.items)
  const todosCount = items.length

    return (
      <div>
          <h1>Your what to do</h1>
          <h2>{todosCount} things to do</h2>
      </div>
    )
  }