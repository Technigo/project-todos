import styled from 'styled-components/macro'

import { Button } from './sharedStyles'

export const FilteringButtonsBox = styled.div`
display: flex;
justify-content: space-evenly;
`

export const FilteringButton = styled(Button)`
  font-size: 2rem;

  &:disabled {
    color: red;
  }
`

export const FilteringInput = styled.label`
align-self: center;
margin-top: 10px;

& input {
  width: 242px;
  text-align: center;
  background-color: transparent;
}
`

export const Count = styled.div`
margin-top: 10px;
text-align: center;
font-size: 10px;
`