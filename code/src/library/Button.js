import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  margin: 6px;
  background: gold;
  font-size: 14px;
  color: gray;
  border: none;
  border-radius: 6px;  

  &:hover {
    background: navy;
    color: white;
    cursor: pointer;
  }
`
export const AddButton = styled.button`
  background: gold;
  padding: 0px 10px 6px;
  border-radius: 50%;
  color: #d0c9d6;
  font-size: 30px;
  border: none;
  margin-right: 8px;

  &:hover {
    background: navy;
    color: white;
    cursor: pointer;
  }
`
export const RemoveButton = styled.button`
  background: #FCFCFC;
  padding: 0 10px 8px 10px;
  border-radius: 8px;
  color: #d0c9d6;
  font-size: 30px;
  border: none;
  margin: 0px 8px 0px 8px;

  &:hover {
    cursor: pointer;
  }
`
export const RemoveAllButton = styled.button`
  background: #a3a3a3;
  padding: 5px 10px;
  border-radius: 8px;
  color: gold;
  font-size: 16px;
  border: none;
  margin: 15px 0px 15px 0px;

  &:hover {
    background: gold;
    color: #a3a3a3;
    cursor: pointer;
  }
`

export const DetailButton = styled.button`
  padding: 10px;
  margin: 6px;
  background: skyblue;
  font-size: 16px;
  border: none;
  border-radius: 6px;  

  &:hover {
    background: black;
    color: white;
  }
`