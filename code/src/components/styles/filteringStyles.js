import styled from 'styled-components/macro'

import { Button } from './sharedStyles'

export const FilteringButtonsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const FilteringButton = styled(Button)`
  font-size: 2rem;
  transition: transform 0.5s;
  color: grey;

  &:disabled {
    color: #3B7C7D;
    transform: scale(1.5);
  }
`

export const FilteringInput = styled.label`
  align-self: center;
  margin-top: 10px;

& input {
  width: 250px;
  text-align: center;
  background-color: transparent;
}
`

export const Count = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #3B7C7D;
`