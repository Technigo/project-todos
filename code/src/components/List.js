import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from 'reducers/Todos.js'

// const ListContainer = styled.ul`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
// `

// const ListActionButton = styled.button`
//   align-self: center;
//   padding: 4px;
//   margin: 2px;
//   font-size: 22px;
//   color: #3f3f3f
// `

export const List = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)

  const onItemDelete = id => {
    dispatch(todos.actions.removeItem(id))
  }

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.isComplete ? "Complete" : "Not complete"}</div>
          <button onClick={() => onItemDelete(item.id)}>Delete item</button>
        </div>
      ))}
    </div>
  )
}