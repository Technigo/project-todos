import styled from 'styled-components'

export const FooterWrapper = styled.section`
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;   
  margin-top: 40px;  

  @media (max-width: 535px) {
    flex-direction: column; 
  }
 `
export const ButtonWrapper = styled.div`
  display: flex;
  bottom: 0;
 `
export const DeleteAllButton = styled.button`
  width: 100px;
  height: 40px;
  background: #fdc1c5;
  border-radius: 5px;
`
export const DeleteCheckedButton = styled(DeleteAllButton)`
  width: 150px;
  margin-left: 40px;
`

export const Text = styled.p`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 17px;
  margin-left: 40px;
`