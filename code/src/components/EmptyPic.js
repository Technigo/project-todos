import React from "react";
import styled from "styled-components";
import spaceimg from "icons/spaceimg.jpeg";

const ImageBox = styled.div`
  margin: 0;
  padding: 0;
  width: 360px;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
    margin-top: 60px;
    border-radius: 5px;
    opacity: 0.7;
  }

    @media (min-width: 768px) {
      width: 440px;
    }
  }
`

const EmptyPic = () => {

  return (
    <ImageBox>
      <img src={spaceimg} alt="img" />
    </ImageBox>
  )
}

export default EmptyPic