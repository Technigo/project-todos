import styled from 'styled-components'

export const Section = styled.section  `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  width: 90%;
  margin: 15px auto;
  border: 1px solid black;

  @media (min-width: 768px) {
    width: 60%;
    margin: 70px auto;
  }
  
  @media (min-width: 1024px) {
    width: 30%;
  }
`

export const Span = styled.span `
  font-size: 30px;
  font-family: 'Tenali Ramakrishna', sans-serif;
  margin: 10px;
  padding: 10px;
  width: 150px;
  display: inline-block; 

  @media (min-width: 768px) {
    width: 200px;
  }
`
export const SpanRemove = styled.span `
  font-size: 30px;
  margin: 20px;
  padding: 20px;
  :hover{
    cursor: pointer;
  }
`
export const Article = styled.article `
  display: flex;
  flex-direction: row;
  align-items: space-between;
  margin: 0;
`