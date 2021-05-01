import React from "react";
import styled from "styled-components";

export const TaskHeader = ({ category, createdAt }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={category[1]} />
      </ImageContainer>
      <Text> {createdAt}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
height: 30px;
justify-content: space-between;
width: 100%;
background:#ea9085;`

const ImageContainer=styled.div`
height: 25px;
width: 25px;
margin: 2px;
overflow:hidden;
`

const Image = styled.img`
object-fit: cover;
width: 100%;
max-height: 100%;
filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(14deg) brightness(103%) contrast(110%);
`

const Text = styled.p`
  padding: 5px 10px;
  margin: 0;
  color: white;
  font-family: 'Roboto', sans-serif;
`;
