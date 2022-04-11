import styled from 'styled-components'


export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Tag = styled.button`
  border-top: 3px solid ${(props) => (props.color)};
  border-left: 1px solid #706B6B;
  border-bottom: 1px solid #706B6B;
  border-right: 1px solid #706B6B;
  border-radius: 5px;
  height: 23px;
  margin: 10px 4px 4px 0;
  padding: 0 5px 2px 5px;
  color: #706B6B;
  font-size: .8em;
  background-color: transparent;

  &:hover {
    
  }
`