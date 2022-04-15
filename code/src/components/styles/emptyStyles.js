import styled from 'styled-components/macro'

import { Section } from './sharedStyles'

export const EmptySection = styled(Section)`
  background-color: #D1D8DC33;
  text-align: center;

  & p {
    font-family: 'Grape Nuts', cursive;
    font-size: 2rem;
    color: #1a2023;
  }

  & span {
    font-size: 3rem;
    color: #3B7C7D;
  }
`
