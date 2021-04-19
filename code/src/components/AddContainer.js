import React from "react"
import { useState } from "react"


export const AddContainer = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(prevState => !prevState)
  }

  return (
    <section>

      <button onClick={handleClick}>Add task</button>

      {isClicked &&
        <>
          <input type="text" />
          <button>Add to list</button>
        </>
      }



    </section>
  )
}