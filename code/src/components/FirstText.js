import React from "react"
import { useSelector } from "react-redux"
// import illustration from "../illustration.svg"

const FirstText = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const totalTodos = items.length
  //   let counter = 0
  //   const completedTodos = () => {
  //     items.forEach(item => (item.isComplete ? (counter += 1) : (counter += 0)))
  //     console.log("counter", counter)

  //     return counter
  //   }

  const filteredIsComplete = items.filter(item => item.isComplete).length

  return (
    <section className="intro-container">
      <header>
        <h1>Add your to do</h1>
        {/* <p>You have {totalTodos - filteredIsComplete} things to do!</p> */}
        <p>
          You completed {filteredIsComplete} out of {totalTodos} things to do!
        </p>
      </header>
      <img src="./illustration.svg" alt="illustration"></img>
    </section>
  )
}

export default FirstText
