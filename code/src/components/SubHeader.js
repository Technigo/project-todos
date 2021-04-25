import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import todos from "../reducers/todos";

import {
  Paragraph,
  SendButton,
  OptionsContainer,
} from "../styled/StyledComponent";

const SubHeader = ({ setRemoveItems, removeItems }) => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  return (
    <OptionsContainer>
      <Paragraph>All: {items.length}</Paragraph>
      <Paragraph>
        Done: {items.filter((item) => item.isComplete).length}
      </Paragraph>
      <Paragraph>
        Pending: {items.filter((item) => !item.isComplete).length}
      </Paragraph>
      <SendButton
        style={{ textAlign: "end" }}
        onClick={() => setRemoveItems(!removeItems)}
      >
        <MdDelete size={30} color="#b50000" />
      </SendButton>

      <SendButton
        style={{ textAlign: "end" }}
        onClick={() => dispatch(todos.actions.selectAll())}
      >
        <RiCheckboxMultipleFill size={30} color="#0f4f8c" />
      </SendButton>
    </OptionsContainer>
  );
};
export default SubHeader;
