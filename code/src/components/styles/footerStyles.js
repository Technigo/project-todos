import styled from "styled-components/macro"

import { Section } from './sharedStyles'

export const FooterSection = styled(Section)`
  background-color: transparent;

  & p {
    margin: 0;
    text-align: center;
    color: #1a2023;
    font-family: 'Grape Nuts', cursive;
    font-size: 1.5rem;
  }

  & a {
    color: inherit;
    font-weight: bold;
  }
`
