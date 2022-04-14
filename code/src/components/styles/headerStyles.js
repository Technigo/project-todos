import styled from "styled-components/macro"

import { Section } from './sharedStyles'

export const HeaderSection = styled(Section)`
background-color: transparent;
border: none;
& h1 {
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}
`
