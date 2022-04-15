import styled from 'styled-components/macro'

import { Button } from './sharedStyles'

export const ActionsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`

export const ActionButton = styled(Button)`
  font-size: 2rem;

  &:disabled {
    color: grey;
  }
`

export const UndoButton = styled(Button)`
  font-size: 2rem;
  transition: transform 0.5s;

  &:disabled {
    color: grey;
  }

  &:enabled {
  transform: scale(1.5);
  }
`
