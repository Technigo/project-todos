import React from "react"
import styled from 'styled-components'


export const Intro = () => {

  return (
    <Hooter>
      <Text>A</Text>
      <Text>LIST</Text>
      <Text>OF</Text>
      <Text>THINGS</Text>
      <Text>THAT</Text>
      <Text>I</Text>
      <Text>WILL</Text>
      <Text>DO</Text>
      <Text>SOMETIME</Text>
      <Text>IN</Text>
      <Text>THE</Text>
      <Text>FUTURE</Text>
      <Text><span role="img" arialabel="Get it done, hands clapp">🙌🙌</span></Text>
    </Hooter>
  )
}

const Hooter = styled.div`
background-color: #f7f7fc;
width: 350px;
height: auto;
padding: 20px;
//margin-bottom: 50px;
`

const Text = styled.h4`
font-family: 'Roboto', sans-serif;
font-weight:600;
font-size: 13px;
color: darkblue;
margin: 2px;
`