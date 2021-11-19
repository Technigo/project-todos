import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import todos from "../reducers/todos";

export const DatePick = ({ item }) => {
  const today = dayjs(new Date());
  const pastDate = dayjs(item.dueDate);
  const dueDateCheck = pastDate.isBefore(today);

  const dispatch = useDispatch();

  const dueDate = item.dueDate;
  const setDueDate = (date) => {
    dispatch(todos.actions.setDueDate({ item: item, date: date.getTime() }));
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={dueDateCheck ? "outdated" : "valid"} area-label="decoration" onClick={onClick} ref={ref}>
      {value ? value : "select"}
    </button>
  ));
  return <ReactDatePicker selected={dueDate ? new Date(dueDate) : undefined} onChange={(date) => setDueDate(date)} customInput={<ExampleCustomInput />} />;
};
