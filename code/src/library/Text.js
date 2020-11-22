import styled from 'styled-components'

//Should this be a textarea-tag instead of input maybe?
{/* <textarea
          placeholder="Type here..."
          tabIndex="0"
          rows="2" */}
export const InputText = styled.input`
  font-size: 20px;
  width: 300px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
  margin-left: 15px;
  margin-right: 15px;
  color: #606060;
  outline: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.color || '#000'};
  font-size: 28px;
`
export const Subtitle = styled.h2`
  color: ${(props) => props.color || '#000'};
  font-size: 22px;
`