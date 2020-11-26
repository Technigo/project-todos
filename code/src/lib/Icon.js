import styled from 'styled-components'

import remember from 'img/remember.png'

export const Icon = styled.img.attrs({
  src: `${remember}`,
  alt: 'icon'
})`
  height: 80px;
  width: 80px;
  margin: 10px 10px 0 0;

  @media (min-width: 500) {
    height: 150px;
    width: 150px;
    margin: 15px 15px 0 0;
  }
`