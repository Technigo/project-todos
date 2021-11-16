import React from "react"

const Greeting = () => {
  const date = new Date()
  const hour = date.getHours()

  return (
    <div>
      {hour >= 12 ? (
        hour >= 16 ? (
          <h2> Good Evening</h2>
        ) : (
          <h2> Good Afternoon</h2>
        )
      ) : (
        <h2> Good Morning</h2>
      )}
    </div>
  )
}

export default Greeting
