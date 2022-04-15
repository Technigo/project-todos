import styled from "styled-components/macro"

import { Section } from './sharedStyles'

export const HeaderSection = styled(Section)`
  background-color: transparent;

  & h1 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #1a2023;
    font-size: 2.5rem;
    font-family: 'Grape Nuts', cursive;
  }
`
