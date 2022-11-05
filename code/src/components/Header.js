import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <FirstTitle>Daily</FirstTitle>
      <Separator>
        <div className="line" />
        <h1>Planner</h1>
        <div className="line" />
      </Separator>
      <CreatorName>by Kartika Purwahyuningrum</CreatorName>
    </>
  )
}

export default Header

const FirstTitle = styled.h1`
  font-size: 60px;
  font-style: italic;
  line-height: 10px;
  font-weight: 400;
  letter-spacing: 5px;
  color: var(--quaternary);
  margin-top: 50px;


@media (min-width: 600px) and (max-width: 900px){
  font-size: 75px;  
  margin-top: 70px; 
  line-height: 25px; 
}

@media (min-width: 901px){
  font-size: 150px;
  margin-top: 80px;
  line-height: 40px; 
}
`

/* To create line between the word "Daily Planner" */
const Separator = styled.div`
  width: 85%;
  display:flex;
  align-items: center;

  h1{
    padding: 0 10px;
    color: var(--quaternary);
    font-size: 40px;
    margin-top: 10px;
    font-weight: 400;
  }

  .line{
    height: 1px;
    margin-top: 20px;
    flex: 1;
    background-color: var(--quaternary);
  }

@media (min-width: 600px) and (max-width: 900px){
  width: 80%;

  h1{
    padding: 0 15px;
    font-size: 55px;
  }
}
  
@media (min-width: 901px){
    width: 80%;

    h1{
      padding: 0 15px;
      font-size: 90px;
      margin-top: 30px;
    }
}
`

const CreatorName = styled.h6`
  color: var(--quinary);
  font-size: 12px;

@media (min-width: 600px) and (max-width: 900px){
  font-size: 15px;
}

@media (min-width: 901px){
  font-size: 18px;
}
`