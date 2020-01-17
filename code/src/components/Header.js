import React from "react"
import { useSelector } from "react-redux"

export const Header = () => {
  const uncomplete = useSelector(store =>
    store.todoList.items.reduce(total => total + 1, 0)
  )
  return <div>{uncomplete}</div>
}

//dagens datum
//summera uncompleted task

// const totalPrice = useSelector(store =>
//   store.cart.items.reduce(
//     (total) => total + item.price * item.quantity,
//     0
//   )
