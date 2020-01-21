import React from "react";
import { useSelector } from "react-redux";
import { HeaderWrapper } from "components/styles";

export const Header = () => {
  const now = new Date(Date.now());
  const options = { dateStyle: "long" };
  const date = new Intl.DateTimeFormat("sv-SE", options).format(now);

  const incomplete = useSelector(store =>
    store.todoList.items.reduce((total, item) => {
      if (item.complete) {
        return total;
      } else {
        return total + 1;
      }
    }, 0)
  );

  return (
    <HeaderWrapper>
      <h1>{date}</h1>
      <p>Left to do: {incomplete}</p>
    </HeaderWrapper>
  );
};
