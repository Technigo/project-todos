import React from 'react';
import styled from 'styled-components/macro';
// import { Link } from 'react-router-dom'

export const ClearScreenTask = () => {
  return (
    <Wrapper>
      <Text>Nice, no more musts.</Text>
      <Image src="/images/relaxpink.png" alt="blue" />
      {/* <Text>Go check out your list of ideas and have fun!</Text>
      <Link to="/wanttodo"><Buttons type="button">Want to dos</Buttons></Link> */}
    </Wrapper>
  )
}

export const ClearScreenIdea = () => {
  return (
    <Wrapper>
      <Text>Go do the thing that inspire you and come back to add all your new ideas.</Text>
      <Image src="/images/idea.png" alt="blue" />
      {/* <Text>Go do the thing that inspire you and come back to add all your new ideas.</Text> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
const Text = styled.h3`
  color: #ff7ab8;
`

const Image = styled.img`
height: 100px;
`
// const Buttons = styled.button`
// background-color:#424242;
// color: #ffbe91;
// border: none;
// border-radius: 20px;
// font-size: 1rem;
// letter-spacing: .15rem;
// padding: 0.5rem 1rem;
// margin: 10px;
// box-shadow: 3px 3px 10px #ffbe91, -3px -3px 10px #ffbe91;

// &:hover{
//   color: #ff7ab8;
//   box-shadow: 3px 3px 10px #ff7ab8, -3px -3px 10px #ff7ab8;
//   cursor: pointer;
// }
// `