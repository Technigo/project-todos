import styled from "styled-components/macro"

import { Button } from './sharedStyles'

export const AddForm = styled.form`
  display: flex;
`

export const AddOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const AddText = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
`

export const AddCategory = styled.select`
  width: 100%;
  margin-top: 10px;
`

export const AddDeadline = styled.div`
  padding-top: 10px;
`

export const AddButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`

export const AddButton = styled(Button)`
  font-size: 4rem;
  transition: transform 0.5s;

  &:disabled {
    color: grey;
  }

  &:enabled {
    transform: scale(1.5);
  }
`
