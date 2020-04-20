import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components/macro'
import swal from 'sweetalert';

export const ClearAllButton = () => {
  const dispatch = useDispatch()

  return (
    <ClearAll
      type="button"
      onClick={() => swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover your tasks!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(todos.actions.removeAll())
            swal("Poof! All your tasks have been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your todo list is safe!");
          }
        })
      }
    > Clear All
    </ClearAll >
  )
}

const ClearAll = styled.button`
  text-align: center;
  background: transparent;
  color: #000;
  border: 3px solid #e5e5e5;
  padding: 5px;
  margin: 5px;
  font-weight: 600;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background: white;
    cursor: pointer;
  }
`