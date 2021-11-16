import React from "react"
import { useSelector } from "react-redux"

const FirstText = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const totalTodos = items.length
  let counter = 0
  const completedTodos = () => {
    items.forEach(item => (item.isComplete ? (counter += 1) : (counter += 0)))
    console.log("counter", counter)

    return counter
  }

  return (
    <div>
      <p>You have {totalTodos - completedTodos()} things to do!</p>
      <p>You finished {counter} things to do!</p>
    </div>
  )
}

export default FirstText
