import styled from 'styled-components/macro'

export const OuterWrapper = styled.section`
  background-color: #BAF8D9;
  margin: 0 auto;
  width: 80%;
  height: 90%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Innerwrapper = styled.div`
  margin: 0% 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Button = styled.button`
  border: none;
  background-color: ${(props) => (props.backgroundColor)};
  border-radius: 20px;
  cursor: pointer;
  color: white;
  margin: ${(props) => (props.margin)}
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color:  #367857;
  border-radius: 20px;
`