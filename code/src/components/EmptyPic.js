import React from "react";
import styled from "styled-components";
import spaceimg from "icons/spaceimg.jpeg";


const ImageBox = styled.div`

margin: 0;
padding: 0;

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    margin-top: 60px;
    border-radius: 5px;
    opacity: 0.7;

    @media (min-width: 768px) {
        width: 400px;
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