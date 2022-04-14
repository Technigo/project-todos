import styled from 'styled-components/macro'

import { Section } from './sharedStyles'

export const EmptySection = styled(Section)`
background-color: transparent;
  border: none;
  text-align: center;
  font-size: 2rem;

  & p {
    text-align: center;
    font-size: 1rem;;
  }
`
