import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <><HeaderTitle>Daily Planner</HeaderTitle>
      <Separator>
        <div className="line" />
        <p>TO DO LIST</p>
        <div className="line" />
      </Separator>
      <CreatorName>by Kartika Purwahyuningrum</CreatorName>
    </>
  )
}

export default Header

const HeaderTitle = styled.h1`
  color: var(--quinary);
  font-size: 50px;
  margin: 30px auto 15px;
  text-align: center;

@media (min-width: 600px) and (max-width: 900px){
  font-size: 75px;    
}

@media (min-width: 901px){
  font-size: 95px;
}
`
/* To create line between the word "Daily Planner" */
const Separator = styled.div`
  width: 85%;
  display:flex;
  align-items: center;

  p{
    padding: 0 10px;
    color: var(--quinary);
    font-size: 18px;
  }

  .line{
    height: 1px;
    flex: 1;
    background-color: var(--quinary);
  }

  @media (min-width: 600px) and (max-width: 900px){
    width: 50%;

    p{
      padding: 0 15px;
      font-size: 25px;
  }
    }
  
    @media (min-width: 901px){
      width: 60%;

      p{
        padding: 0 15px;
        font-size: 30px;
    }
  }
`

const CreatorName = styled.h6`
  color: var(--primary);
  font-size: 12px;

@media (min-width: 600px) and (max-width: 900px){
  font-size: 15px;
}

@media (min-width: 901px){
  font-size: 18px;
}
`

/*
@media (min-width: 600px) and (max-width: 900px){

}

@media (min-width: 901px){

}

  */