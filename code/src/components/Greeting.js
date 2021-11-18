import React from "react"
import styled from "styled-components"

const Greeting = () => {
  const date = new Date()
  const hour = date.getHours()

  const Gif = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
  `
  const GreetingText = styled.h2`
    font-size: 20px;
    color: #000;
  `

  return (
    <div>
      {hour >= 12 ? (
        hour >= 16 ? (
          <>
            <Gif
              // src="https://media.giphy.com/media/p2PoRL1YVjh31Pnyj6/giphy.gif"
              // src="https://media.giphy.com/media/HQElMzJ2lZp9LN7g2x/giphy.gif"
              src="https://media.giphy.com/media/QXbkZHjE3Q7dyzWUX7/giphy.gif"
              alt="evening gif"
            ></Gif>
            <GreetingText> Good Evening</GreetingText>
          </>
        ) : (
          <>
            <Gif
              src="https://media.giphy.com/media/f94D70FW49zjL33sIL/giphy.gif"
              // src="https://media.giphy.com/media/SxMPKbvfD4zpXjEmc3/giphy.gif"
              alt="afternoon gif"
            ></Gif>
            <GreetingText> Good Afternoon</GreetingText>
          </>
        )
      ) : (
        <>
          <Gif
            // src="https://media.giphy.com/media/MY6krcVK50sWsCakAp/giphy.gif"
            // src="https://media.giphy.com/media/h5c4FzZuPGKR6ajcW8/giphy.gif"
            src="https://media.giphy.com/media/SxMPKbvfD4zpXjEmc3/giphy.gif"
            alt="morning gif"
          ></Gif>
          <GreetingText>Good Morning</GreetingText>
        </>
      )}
    </div>
  )
}

export default Greeting
