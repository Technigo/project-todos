import styled from 'styled-components'


export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TagInput = styled.input`
  border-top: 3px solid ${(props) => (props.color)};
  border-left: 1px solid #706B6B;
  border-bottom: 1px solid #706B6B;
  border-right: 1px solid #706B6B;
  border-radius: 5px;
  height: 23px;
  margin: 10px 4px 4px 0;
  padding: 0 5px 2px 5px;
  font-size: .8em;
  background-color: #fffefd;

  &:hover {
  cursor: pointer;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
  }
`
export const Tag = styled.span`
  border-top: 2px solid ${(props) => (props.color)};
  border-left: 1px solid #706B6B;
  border-bottom: 1px solid #706B6B;
  border-right: 1px solid #706B6B;
  font-size: .6em;
  border-radius: 5px;
  padding: 2px;
  position: absolute;
  bottom: 2px;
  right: 28px;
  background-color: #fffefd;
`