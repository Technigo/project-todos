import styled from 'styled-components'

export const TitleEmoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel
}))`
  font-size:30px;
`
export const ButtonEmoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel
}))`
  font-size:15px;
`