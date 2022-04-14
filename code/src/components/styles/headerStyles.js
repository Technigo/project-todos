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
    text-shadow: 0px 4px 3px #3B7C7D80,
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
  }
`
