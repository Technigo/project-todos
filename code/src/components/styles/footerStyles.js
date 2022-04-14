import styled from "styled-components/macro"

import { Section } from './sharedStyles'

export const FooterSection = styled(Section)`

& p {
  margin: 0;
  text-align: center;
}

& a {
  color: inherit;
  font-weight: bold;
}
`
