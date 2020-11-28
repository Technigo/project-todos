import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import swal from "sweetalert";

import { todos } from "reducers/todos";

export const ClearAllButton = () => {
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    swal({
      title: "Clear all To-Do's?",
      text: "Are you sure you want to delete all of your To-Do's?",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAll());
        swal("Cleared!", "Your To-Do's have been deleted!", "warning");
      } else {
        swal("Cancelled!", "Your To-Do's are still a work in progress!");
      }
    });
  };

  return (
    <ClearButton type="reset" onClick={() => handleOnDelete()}>
      Clear All
    </ClearButton>
  );
};

const ClearButton = styled.button`
  align-self: center;
  height: 30px;
  width: 95%;
  margin: 10px;
  font-size: 20px;
  background: ${props => props.background || "black"};
  color: #fff;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #474747;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 150px;
    height: 50px;
  }
`;
